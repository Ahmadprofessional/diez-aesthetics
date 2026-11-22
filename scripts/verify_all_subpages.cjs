const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const routes = ['/', '/about', '/treatments', '/prices', '/gallery', '/contact'];
  const results = {};

  for (const route of routes) {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    const res = await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const brokenImages = await page.evaluate(() => {
      return Array.from(document.images)
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => img.src);
    });

    results[route] = {
      status: res.status(),
      brokenImagesCount: brokenImages.length,
      brokenImages,
      consoleErrorsCount: consoleErrors.length,
    };
  }

  await browser.close();
  console.log('Subpage Verification Summary:');
  console.log(JSON.stringify(results, null, 2));
})();
