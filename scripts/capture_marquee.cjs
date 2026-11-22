const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Dismiss cookie banner
  try {
    const acceptBtn = await page.$('button:has-text("Accept All")');
    if (acceptBtn) {
      await acceptBtn.click();
      await page.waitForTimeout(300);
    }
  } catch (e) {}

  // Scroll to the testimonials section
  const testimonials = await page.$('section:has-text("PATIENT TESTIMONIALS")');
  if (testimonials) {
    await testimonials.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/marquee_reviews_desktop.png' });
  }

  // Mobile
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobile.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  try {
    const mAccept = await mobile.$('button:has-text("Accept All")');
    if (mAccept) {
      await mAccept.click();
      await mobile.waitForTimeout(300);
    }
  } catch (e) {}
  const mTestimonials = await mobile.$('section:has-text("PATIENT TESTIMONIALS")');
  if (mTestimonials) {
    await mTestimonials.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(800);
    await mobile.screenshot({ path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/marquee_reviews_mobile.png' });
  }

  await browser.close();
  console.log('Saved marquee_reviews_desktop.png and marquee_reviews_mobile.png');
})();
