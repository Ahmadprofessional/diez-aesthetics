const { chromium } = require('playwright');
const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

function waitForServer(port, timeout = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.get(`http://localhost:${port}/`, (res) => {
        resolve();
      });
      req.on('error', () => {
        if (Date.now() - start > timeout) {
          reject(new Error('Server boot timeout'));
        } else {
          setTimeout(check, 500);
        }
      });
    };
    check();
  });
}

async function run() {
  const PORT = 3012;
  console.log(`--- Starting Next.js Production Server on Port ${PORT} ---`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: 'inherit',
  });

  await waitForServer(PORT);
  console.log(`Server responded on http://localhost:${PORT}/`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  const routes = ['/', '/about/', '/treatments/', '/prices/', '/gallery/', '/contact/'];
  const results = {};

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`\nTesting Route: ${url}`);
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    const status = response.status();
    console.log(`Status: ${status}`);

    // Check all images on page
    const imgAudit = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images.map((img) => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      }));
    });

    const brokenImages = imgAudit.filter((i) => !i.complete || i.naturalWidth === 0);
    console.log(`Total images: ${imgAudit.length}, Broken images: ${brokenImages.length}`);
    if (brokenImages.length > 0) {
      console.error('Broken images found:', brokenImages);
    }

    results[route] = {
      status,
      totalImages: imgAudit.length,
      brokenImages: brokenImages.length,
    };
  }

  // Deep inspection on Homepage
  console.log('\n--- Deep Inspection on Homepage (/) ---');
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });

  // 1. Verify Hero Model & Text
  const heroText = await page.textContent('section');
  const hasSubtitle = heroText.includes('ENHANCE. RESTORE. REFINE.');
  const hasTitle = heroText.includes('Natural Beauty') || heroText.includes('NATURAL BEAUTY');
  const hasDesc = heroText.includes('Advanced aesthetic and regenerative treatments');

  console.log('Hero Tagline present:', hasSubtitle);
  console.log('Hero Title present:', hasTitle);
  console.log('Hero Description present:', hasDesc);

  // 2. Test Before & After Carousel Interactivity
  console.log('\nTesting Before & After Carousel & Hover...');
  const caseCards = await page.$$('section:has-text("REAL RESULTS") div.group');
  console.log('Found case cards in carousel:', caseCards.length);
  if (caseCards.length > 0) {
    // Hover on first card
    await caseCards[0].hover();
    await page.waitForTimeout(500);
    console.log('Hovered on Case Card 1 successfully');

    // Test carousel arrow buttons
    const nextBtn = await page.$('button[aria-label="Next case"]');
    if (nextBtn) {
      await nextBtn.click();
      await page.waitForTimeout(400);
      console.log('Scrolled carousel right successfully');
    }
  }

  // 3. Test Footer Elements
  console.log('\nTesting Footer...');
  const footerText = await page.textContent('footer');
  const hasWatermark = footerText.includes('DIEZ');
  const hasColumns = footerText.includes('Diez Atelier') && footerText.includes('Treatments');
  console.log('Footer watermark DIEZ present:', hasWatermark);
  console.log('Footer columns present:', hasColumns);

  // 4. Test Treatments Atelier Accordion
  console.log('\nTesting Treatments Atelier Accordion...');
  const treatmentRows = await page.$$('section:has-text("THE CLINICAL PORTFOLIO") .cursor-pointer');
  console.log('Found treatment rows:', treatmentRows.length);
  if (treatmentRows.length > 2) {
    await treatmentRows[2].click();
    await page.waitForTimeout(400);
    console.log('Expanded treatment row 2 successfully');
  }

  // Screenshots
  fs.mkdirSync('test_results/screenshots', { recursive: true });
  await page.screenshot({ path: 'test_results/screenshots/home_desktop.png', fullPage: true });
  console.log('Captured fullpage screenshot: test_results/screenshots/home_desktop.png');

  // Mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'test_results/screenshots/home_mobile.png', fullPage: false });
  console.log('Captured mobile viewport screenshot: test_results/screenshots/home_mobile.png');

  console.log('\nConsole Errors Total:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Errors detected:', consoleErrors);
  }

  await browser.close();
  server.kill();

  console.log('\n=== VERIFICATION SUMMARY ===');
  console.log(JSON.stringify({ results, consoleErrorsCount: consoleErrors.length }, null, 2));

  const totalBroken = Object.values(results).reduce((acc, r) => acc + r.brokenImages, 0);
  process.exit(totalBroken === 0 && consoleErrors.length === 0 ? 0 : 1);
}

run().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
