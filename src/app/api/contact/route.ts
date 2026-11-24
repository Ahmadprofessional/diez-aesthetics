import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  treatment: z.string().min(1, 'Please select a treatment'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
  honeypot: z.string().max(0, 'Spam detected').optional(),
  recaptchaToken: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Validation
    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { success: false, errors: parseResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, treatment, message, honeypot, recaptchaToken } = parseResult.data;

    // 2. Silent Honeypot Trap for automated bots
    if (honeypot && honeypot.length > 0) {
      // Pretend success so bots do not retry
      return NextResponse.json({ success: true });
    }

    // 3. Google reCAPTCHA v2 Server-side Verification
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { success: false, error: 'Please complete the reCAPTCHA verification.' },
          { status: 400 }
        );
      }

      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
        }).toString(),
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json(
          { success: false, error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // 4. Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@diezaesthetics.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Diez Aesthetics Inquiries <inquiries@diezaesthetics.com>';

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY is not set. Submission logged locally:', {
        name,
        email,
        phone,
        treatment,
        message,
      });

      return NextResponse.json({
        success: true,
        message: 'Inquiry received (Development Mode: RESEND_API_KEY not configured yet).',
      });
    }

    const resend = new Resend(resendApiKey);

    // Luxury clinic HTML email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Consultation Inquiry</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f2; margin: 0; padding: 24px; color: #1c1917; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e7e2dc; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
            .header { background: #1c1917; padding: 32px 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 2px; font-family: 'Times New Roman', serif; }
            .header p { margin: 6px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #a8a29e; }
            .content { padding: 32px 28px; }
            .badge { display: inline-block; padding: 6px 12px; background: #efebe8; border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #44403c; margin-bottom: 20px; }
            .field-row { margin-bottom: 16px; border-bottom: 1px solid #f2ede8; padding-bottom: 12px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #78716c; font-weight: 600; margin-bottom: 4px; }
            .value { font-size: 15px; color: #1c1917; font-weight: 400; }
            .message-box { background: #FAF8F5; border-left: 3px solid #1c1917; padding: 16px 20px; border-radius: 4px; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #292524; }
            .actions { margin-top: 28px; text-align: center; }
            .btn { display: inline-block; background: #1c1917; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; }
            .footer { background: #FAF8F5; padding: 20px 24px; text-align: center; font-size: 11px; color: #a8a29e; border-top: 1px solid #f2ede8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>DIEZ AESTHETICS</h1>
              <p>New Website Consultation Enquiry &bull; diezaesthetics.com</p>
            </div>
            <div class="content">
              <div class="badge">🌐 Website Enquiry &bull; ${treatment}</div>
              
              <div class="field-row">
                <div class="label">Patient Name</div>
                <div class="value"><strong>${name}</strong></div>
              </div>

              <div class="field-row">
                <div class="label">Treatment Requested</div>
                <div class="value"><strong>${treatment}</strong></div>
              </div>

              <div class="field-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #1c1917; text-decoration: underline;">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #1c1917; text-decoration: underline;">${phone}</a></div>
              </div>

              <div class="field-row" style="border-bottom: none;">
                <div class="label">Message / Clinical Goals</div>
                <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
              </div>

              <div class="actions">
                <a href="mailto:${email}?subject=Regarding your consultation inquiry with Diez Aesthetics" class="btn">Reply to Patient</a>
              </div>
            </div>
            <div class="footer">
              Diez Aesthetics &bull; 260 Pentonville Road, King's Cross, London N1 9JY<br>
              Inquiry sent via diezaesthetics.com
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Enquiry from "${name}" (Website)`,
      html: emailHtml,
    });

    if (resendError) {
      console.error('Resend delivery error:', resendError);
      return NextResponse.json(
        { success: false, error: resendError.message || 'Failed to dispatch email via Resend' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry successfully submitted.',
      id: resendData?.id,
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing your inquiry.' },
      { status: 500 }
    );
  }
}
