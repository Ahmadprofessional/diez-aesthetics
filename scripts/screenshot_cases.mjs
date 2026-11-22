import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000/#results', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Dismiss cookie banner if present
  const acceptBtn = await page.$('button:has-text("Accept All")');
  if (acceptBtn) {
    await acceptBtn.click();
    await page.waitForTimeout(500);
  }

  // Iterate over each case thumbnail (0 to 4)
  const thumbs = await page.$$('#results [data-case-idx]');
  console.log(`Found ${thumbs.length} thumbnails`);

  for (let i = 0; i < thumbs.length; i++) {
    await thumbs[i].click();
    await page.waitForTimeout(600);
    const results = await page.$('#results');
    await results.screenshot({
      path: `C:/Users/Pak/.gemini/antigravity/brain/6e5f2304-384f-4d40-a53b-470454aa8ff1/case_view_${i + 1}.png`
    });
    console.log(`Captured case_view_${i + 1}.png`);
  }

  await browser.close();
})();
