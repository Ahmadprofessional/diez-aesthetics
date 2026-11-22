const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'home', file: 'archive/mirror/index.html' },
  { name: 'about', file: 'archive/mirror/about.html' },
  { name: 'treatments', file: 'archive/mirror/treatments.html' },
  { name: 'gallery', file: 'archive/mirror/gallery.html' },
  { name: 'prices', file: 'archive/mirror/prices.html' },
  { name: 'contact', file: 'archive/mirror/contact.html' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function run() {
  fs.mkdirSync('screenshots', { recursive: true });
  fs.mkdirSync('design', { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const tokens = {
    fonts: {
      heading: ['Cormorant Garamond', 'serif'],
      subheading: ['Montserrat', 'sans-serif'],
      body: ['Inter', 'Roboto', 'sans-serif'],
    },
    colors: {
      background_dark: '#0a0a0a',
      background_card: '#141414',
      background_light: '#ffffff',
      gold_primary: '#c5a059',
      gold_light: '#dfbe7a',
      gold_dark: '#9d7c38',
      text_light: '#f5f5f5',
      text_muted: '#a3a3a3',
      text_dark: '#171717',
      border_subtle: 'rgba(255, 255, 255, 0.1)',
      border_gold: 'rgba(197, 160, 89, 0.3)',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '16px',
      full: '9999px',
    },
    shadows: {
      card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      gold_glow: '0 0 25px rgba(197, 160, 89, 0.2)',
    },
    breakpoints: {
      mobile: '390px',
      tablet: '768px',
      desktop: '1440px',
    }
  };

  fs.writeFileSync('design/tokens.json', JSON.stringify(tokens, null, 2));
  console.log('Wrote design/tokens.json');

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    for (const p of pages) {
      const absPath = path.resolve(p.file);
      const fileUrl = 'file:///' + absPath.replace(/\\/g, '/');
      try {
        await page.goto(fileUrl, { waitUntil: 'load', timeout: 30000 });
        // Scroll fully down to trigger lazy loading / animations
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 300;
            const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if (totalHeight >= scrollHeight) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                resolve();
              }
            }, 50);
          });
        });
        await page.waitForTimeout(500);

        const screenshotPath = `screenshots/${p.name}_${vp.name}_${vp.width}.png`;
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Captured screenshot: ${screenshotPath}`);
      } catch (err) {
        console.error(`Failed screenshot for ${p.name} at ${vp.name}:`, err.message);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('All screenshots completed.');
}

run().catch((err) => {
  console.error('Error running Playwright screenshots:', err);
  process.exit(1);
});
