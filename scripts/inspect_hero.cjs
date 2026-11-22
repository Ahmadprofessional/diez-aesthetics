const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const info = await page.evaluate(() => {
    const img = document.querySelector('img[alt*="Diez Aesthetics London"]');
    if (!img) {
      const allImgs = Array.from(document.querySelectorAll('img')).map(i => ({ alt: i.alt, src: i.src }));
      return { found: false, allImgs };
    }
    const rect = img.getBoundingClientRect();
    const style = window.getComputedStyle(img);
    const parent = img.parentElement;
    const grandParent = parent ? parent.parentElement : null;
    return {
      found: true,
      src: img.src,
      w: rect.width,
      h: rect.height,
      top: rect.top,
      left: rect.left,
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity,
      parentHeight: parent ? parent.clientHeight : null,
      parentWidth: parent ? parent.clientWidth : null,
      parentStyle: parent ? parent.getAttribute('style') : null,
      grandParentHeight: grandParent ? grandParent.clientHeight : null,
    };
  });

  console.log('Result:', JSON.stringify(info, null, 2));
  await browser.close();
})();
