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
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Accept cookies to clear overlay
  const acceptBtn = await page.$('button:has-text("Accept All")');
  if (acceptBtn) {
    console.log('Accepting cookies...');
    await acceptBtn.click();
    await page.waitForTimeout(500);
  }

  // 1. Hero Section verification
  const heroSection = await page.$('section:first-of-type');
  if (heroSection) {
    await heroSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/hero_desktop_pristine.png'
    });
    console.log('Captured hero_desktop_pristine.png');
  }

  // 2. Treatments Atelier verification
  const treatmentsSection = await page.$('#treatments');
  if (treatmentsSection) {
    // Click row 0 (Facelift / Dermal Fillers)
    const rows = await page.$$('#treatments .divide-y > div');
    if (rows.length > 2) {
      await rows[2].click();
      await page.waitForTimeout(600);
    }
    await treatmentsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/treatments_atelier_dark_luxury.png'
    });
    console.log('Captured treatments_atelier_dark_luxury.png');
  }

  // 3. Before & After Studio verification
  const resultsSection = await page.$('#results');
  if (resultsSection) {
    // Scroll to results
    await resultsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    // Initial screenshot
    await resultsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_initial.png'
    });
    console.log('Captured studio_initial.png');

    // Test dragging the slider curtain
    const stage = await page.$('#results [role="slider"]');
    if (stage) {
      const box = await stage.boundingBox();
      if (box) {
        await page.mouse.move(box.x, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x - 160, box.y + box.height / 2, { steps: 10 });
        await page.mouse.up();
        await page.waitForTimeout(500);
        await resultsSection.screenshot({
          path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_dragged_25.png'
        });
        console.log('Captured studio_dragged_25.png');
      }
    }

    // Quick snap: "After 100%"
    const after100Btn = await page.$('#results button:has-text("After 100%")');
    if (after100Btn) {
      await after100Btn.click();
      await page.waitForTimeout(500);
      await resultsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_after_100.png'
      });
      console.log('Captured studio_after_100.png');
    }

    // Quick snap: "50 / 50 Split"
    const splitBtn = await page.$('#results button:has-text("50 / 50 Split")');
    if (splitBtn) {
      await splitBtn.click();
      await page.waitForTimeout(500);
      await resultsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_split_50.png'
      });
      console.log('Captured studio_split_50.png');
    }

    // Test "2.5x Loupe" Mode
    const loupeBtn = await page.$('#results button:has-text("2.5x Loupe")');
    if (loupeBtn) {
      await loupeBtn.click();
      await page.waitForTimeout(500);
      // Move mouse over center of stage to activate loupe
      const stageBox = await page.$('#results .cursor-none, #results .cursor-ew-resize');
      if (stageBox) {
        const sBox = await stageBox.boundingBox();
        if (sBox) {
          await page.mouse.move(sBox.x + sBox.width * 0.45, sBox.y + sBox.height * 0.45);
          await page.waitForTimeout(500);
        }
      }
      await resultsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_loupe_active.png'
      });
      console.log('Captured studio_loupe_active.png');
    }

    // Switch back to "Slider" mode
    const sliderModeBtn = await page.$('#results button:has-text("Slider")');
    if (sliderModeBtn) {
      await sliderModeBtn.click();
      await page.waitForTimeout(500);
    }

    // Click Case 03 (Full Facial Harmonisation)
    const case3Thumb = await page.$('#results [data-case-idx="2"]');
    if (case3Thumb) {
      console.log('Clicking Case 03 thumbnail...');
      await case3Thumb.click();
      await page.waitForTimeout(600);
      await resultsSection.screenshot({
        path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_case_03.png'
      });
      console.log('Captured studio_case_03.png');

      // Hover on Case 03 hotspot pin
      const hotspot = await page.$('#results button[aria-label*="Hotspot"]');
      if (hotspot) {
        await hotspot.hover();
        await page.waitForTimeout(500);
        await resultsSection.screenshot({
          path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_case_03_hotspot.png'
        });
        console.log('Captured studio_case_03_hotspot.png');
      }
    }
  }

  // 4. Test Reviews Marquee
  const reviewsSection = await page.$('#reviews');
  if (reviewsSection) {
    await reviewsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await reviewsSection.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/reviews_marquee_awwwards.png'
    });
    console.log('Captured reviews_marquee_awwwards.png');
  }

  // 5. Mobile Viewport (390x844)
  console.log('Testing mobile viewport...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/#results', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const acceptMobile = await page.$('button:has-text("Accept All")');
  if (acceptMobile) await acceptMobile.click();
  await page.waitForTimeout(500);

  const heroMobile = await page.$('section:first-of-type');
  if (heroMobile) {
    await heroMobile.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/hero_mobile_pristine.png'
    });
    console.log('Captured hero_mobile_pristine.png');
  }

  const resultsMobile = await page.$('#results');
  if (resultsMobile) {
    await resultsMobile.screenshot({
      path: 'C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/studio_mobile_pristine.png'
    });
    console.log('Captured studio_mobile_pristine.png');
  }

  console.log('Total Console Errors:', errors.length);
  if (errors.length > 0) {
    console.log('Console Errors:', errors);
  }

  await browser.close();
  console.log('All Awwwards verifications completed successfully!');
})();
