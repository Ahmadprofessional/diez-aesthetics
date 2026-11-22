const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Dismiss cookie banner by clicking Accept All so it doesn't block views
  try {
    const acceptBtn = await page.$('button:has-text("Accept All")');
    if (acceptBtn) {
      await acceptBtn.click();
      await page.waitForTimeout(400);
    }
  } catch (e) {}

  // Hero clean screenshot
  await page.screenshot({ path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/final_hero_desktop.png' });

  // Smooth scroll through entire page to trigger all in-view animations
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < totalHeight; y += 600) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(100);
  }
  await page.waitForTimeout(500);

  // Full page screenshot
  await page.screenshot({ path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/final_full_page_desktop.png', fullPage: true });

  // Mobile
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobile.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  try {
    const mAccept = await mobile.$('button:has-text("Accept All")');
    if (mAccept) {
      await mAccept.click();
      await mobile.waitForTimeout(400);
    }
  } catch (e) {}
  await mobile.screenshot({ path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/final_hero_mobile.png' });

  await browser.close();
  console.log('Finished capturing all final views!');
})();
