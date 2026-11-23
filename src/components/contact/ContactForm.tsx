'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  treatment: z.string().min(1, 'Please select a treatment'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
  honeypot: z.string().max(0, 'Spam detected'),
});

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: 'Anti-Wrinkle Injections',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = FormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate server action processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[24px] bg-white border border-[#747476]/20 p-8 sm:p-12 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#efebe8] border border-[#747476]/25 flex items-center justify-center text-[#545358] mx-auto">
          <CheckCircle2 className="w-7 h-7 text-[#545358]" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]">
          Thank You for Reaching Out
        </h3>
        <p className="text-sm text-[#57534e] font-light max-w-md mx-auto leading-relaxed">
          Your inquiry has been received. Daniel Diez and the clinical team will contact you shortly to answer your questions or confirm your consultation.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              treatment: 'Anti-Wrinkle Injections',
              message: '',
              honeypot: '',
            });
          }}
          className="text-xs uppercase font-space tracking-wider text-[#545358] font-semibold underline hover:text-black pt-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] bg-white border border-[#747476]/20 p-6 sm:p-10 space-y-6 shadow-sm"
      noValidate
    >
      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]">
          Send an Inquiry
        </h3>
        <p className="text-xs text-[#747476] font-space pt-1">
          Confidential inquiries directly handled by our clinical team.
        </p>
      </div>

      {/* Hidden honeypot field for bot suppression */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-[#44403c] font-medium font-mono">
          Full Name <span className="text-[#3b3b3d]">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Sarah Jenkins"
          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/10 text-[#1c1917] text-sm focus:border-[#3b3b3d] focus:bg-white focus:outline-none transition-all placeholder:text-[#a8a29e]"
        />
        {errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-[#44403c] font-medium font-mono">
            Email Address <span className="text-[#3b3b3d]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/10 text-[#1c1917] text-sm focus:border-[#3b3b3d] focus:bg-white focus:outline-none transition-all placeholder:text-[#a8a29e]"
          />
          {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-[#44403c] font-medium font-mono">
            Phone Number <span className="text-[#3b3b3d]">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+44 7123 456789"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/10 text-[#1c1917] text-sm focus:border-[#3b3b3d] focus:bg-white focus:outline-none transition-all placeholder:text-[#a8a29e]"
          />
          {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Treatment Interest */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-[#545358] font-medium font-space">
          Treatment of Interest
        </label>
        <select
          value={formData.treatment}
          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#efebe8] border border-[#747476]/20 text-[#1c1a19] text-sm focus:border-[#545358] focus:bg-white focus:outline-none transition-all"
        >
          <option value="Anti-Wrinkle Injections">Anti-Wrinkle Injections</option>
          <option value="Dermal & Lip Fillers">Dermal &amp; Lip Fillers</option>
          <option value="Polynucleotides">Polynucleotides (Eye &amp; Face Rejuvenation)</option>
          <option value="Skin Boosters (Profhilo)">Skin Boosters (Profhilo &amp; Seventy Hyal)</option>
          <option value="Medical Microneedling">Medical Microneedling</option>
          <option value="Bespoke Facial Harmonisation">Bespoke Facial Harmonisation</option>
          <option value="General Consultation">General Consultation</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-[#545358] font-medium font-space">
          How can we help you? <span className="text-[#545358]">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your aesthetic goals or any questions you have..."
          className="w-full px-4 py-3 rounded-xl bg-[#efebe8] border border-[#747476]/20 text-[#1c1a19] text-sm focus:border-[#545358] focus:bg-white focus:outline-none transition-all resize-none placeholder:text-[#a8a5a3]"
        />
        {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-full bg-[#3b3b3d] hover:bg-[#545358] text-white text-xs font-space uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
      >
        <Send className="w-4 h-4 text-[#efebe8]" />
        <span>{isSubmitting ? 'Sending...' : 'Send Consultation Inquiry'}</span>
      </button>

      <p className="text-[11px] text-[#78716c] text-center">
        Your information is kept strictly confidential and never shared with third parties.
      </p>
    </form>
  );
}
