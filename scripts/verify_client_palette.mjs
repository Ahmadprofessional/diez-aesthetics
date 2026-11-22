import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => {
    errors.push(err.message);
  });

  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // Accept cookies to clear overlay
  const acceptBtn = await page.$('button:has-text("Accept All")');
  if (acceptBtn) {
    await acceptBtn.click();
    await page.waitForTimeout(500);
  }

  // 1. Full Viewport (Navbar + Hero seamlessly integrated, zero rounded box)
  await page.screenshot({
    path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/hero_full_viewport_desktop.png',
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });
  console.log('Captured hero_full_viewport_desktop.png');

  // Hero Section screenshot
  const heroSection = await page.$('section:first-of-type');
  if (heroSection) {
    await heroSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/hero_warm_terracotta_desktop.png'
    });
    console.log('Captured hero_warm_terracotta_desktop.png');
  }

  // 2. Treatments Circular Selector screenshot
  const treatmentsSection = await page.$('#treatments');
  if (treatmentsSection) {
    await treatmentsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await treatmentsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/treatments_circular_selector_desktop.png'
    });
    console.log('Captured treatments_circular_selector_desktop.png');

    // Click on "Signature Lips" circle button
    const lipsBtn = await page.$('#treatments button:has-text("Signature Lips")');
    if (lipsBtn) {
      console.log('Clicking Signature Lips button...');
      await lipsBtn.click();
      await page.waitForTimeout(600);
      await treatmentsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/treatments_circular_selector_lips.png'
      });
      console.log('Captured treatments_circular_selector_lips.png');
    }
  }

  // 3. Before & After Section with Terracotta Palette
  const resultsSection = await page.$('#results');
  if (resultsSection) {
    await resultsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await resultsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/before_after_terracotta_desktop.png'
    });
    console.log('Captured before_after_terracotta_desktop.png');
  }

  // 4. Mobile Viewport (390x844)
  console.log('Testing mobile viewport (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1200);

  const acceptMobile = await page.$('button:has-text("Accept All")');
  if (acceptMobile) await acceptMobile.click();
  await page.waitForTimeout(400);

  const heroMobile = await page.$('section:first-of-type');
  if (heroMobile) {
    await heroMobile.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/hero_warm_terracotta_mobile.png'
    });
    console.log('Captured hero_warm_terracotta_mobile.png');
  }

  const treatmentsMobile = await page.$('#treatments');
  if (treatmentsMobile) {
    await treatmentsMobile.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await treatmentsMobile.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/treatments_circular_selector_mobile.png'
    });
    console.log('Captured treatments_circular_selector_mobile.png');
  }

  console.log('Total Console Errors:', errors.length);
  if (errors.length > 0) {
    console.log('Errors:', errors);
  }

  await browser.close();
  console.log('Verification finished successfully!');
})();
