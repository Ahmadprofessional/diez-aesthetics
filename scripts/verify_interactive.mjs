import { chromium } from 'playwright';
import path from 'path';

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

  console.log('Navigating to http://localhost:3000/#results ...');
  await page.goto('http://localhost:3000/#results', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 1. Initial view of results
  const resultsSection = await page.$('#results');
  if (resultsSection) {
    await resultsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/results_interactive_initial.png'
    });
    console.log('Captured results_interactive_initial.png');
  } else {
    console.log('Warning: #results not found!');
  }

  // 2. Drag slider curtain to reveal Before
  const sliderBar = await page.$('#results [role="slider"]');
  if (sliderBar) {
    const box = await sliderBar.boundingBox();
    if (box) {
      console.log('Found slider handle at:', box.x, box.y);
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x - 200, box.y + box.height / 2, { steps: 12 });
      await page.mouse.up();
      await page.waitForTimeout(600);

      if (resultsSection) {
        await resultsSection.screenshot({
          path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/results_interactive_dragged.png'
        });
        console.log('Captured results_interactive_dragged.png');
      }
    }
  }

  // 3. Hover on anatomical hotspot
  const hotspotBtn = await page.$('#results button[title*="Hotspot"], #results button[aria-label*="Hotspot"]');
  if (hotspotBtn) {
    console.log('Hovering on anatomical hotspot...');
    await hotspotBtn.hover();
    await page.waitForTimeout(600);
    if (resultsSection) {
      await resultsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/results_interactive_hotspot_hover.png'
      });
      console.log('Captured results_interactive_hotspot_hover.png');
    }
  }

  // 4. Switch category / case: click on "Polynucleotides" or "Bespoke Harmonisation"
  const tabBtn = await page.$('#results button:has-text("Polynucleotides"), #results button:has-text("Bespoke")');
  if (tabBtn) {
    console.log('Clicking tab button...');
    await tabBtn.click();
    await page.waitForTimeout(800);
    if (resultsSection) {
      await resultsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/results_interactive_case_switched.png'
      });
      console.log('Captured results_interactive_case_switched.png');
    }
  }

  // 5. Reviews marquee screenshot
  const reviewsSection = await page.$('#reviews');
  if (reviewsSection) {
    await reviewsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/reviews_marquee_check.png'
    });
    console.log('Captured reviews_marquee_check.png');
  }

  // 6. Mobile viewport verification (390x844)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/#results', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const mobileResults = await page.$('#results');
  if (mobileResults) {
    await mobileResults.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/results_interactive_mobile.png'
    });
    console.log('Captured results_interactive_mobile.png');
  }

  console.log('Console Errors:', errors);
  await browser.close();
  console.log('Visual verification script finished successfully.');
})();
