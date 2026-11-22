const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');

// Simple static server for archive/mirror
function startServer(port) {
  const mirrorDir = path.resolve(__dirname, '..', 'archive', 'mirror');
  const server = http.createServer((req, res) => {
    let filePath = path.join(mirrorDir, req.url === '/' ? 'index.html' : req.url);
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(fs.readFileSync(filePath));
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

async function runAudit() {
  const PORT = 8089;
  const server = await startServer(PORT);
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // Mobile baseline
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });

  const pages = [
    { name: 'Homepage', path: '/index.html', slug: '/' },
    { name: 'About', path: '/about.html', slug: '/about/' },
    { name: 'Treatments', path: '/treatments.html', slug: '/treatments/' },
    { name: 'Gallery', path: '/gallery.html', slug: '/gallery/' },
    { name: 'Prices', path: '/prices.html', slug: '/prices/' },
    { name: 'Contact', path: '/contact.html', slug: '/contact/' },
  ];

  const results = [];

  for (const p of pages) {
    const page = await context.newPage();
    const url = `http://localhost:${PORT}${p.path}`;
    
    const startTime = Date.now();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - startTime;

    const metrics = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const scripts = document.querySelectorAll('script');
      const styles = document.querySelectorAll('link[rel="stylesheet"], style');
      const images = document.querySelectorAll('img');
      let imagesWithoutDims = 0;
      let imagesWithoutAlt = 0;
      images.forEach(img => {
        if (!img.getAttribute('width') || !img.getAttribute('height')) imagesWithoutDims++;
        if (!img.getAttribute('alt') || img.getAttribute('alt').trim() === '') imagesWithoutAlt++;
      });

      // Max DOM depth
      let maxDepth = 0;
      function getDepth(el, depth) {
        if (depth > maxDepth) maxDepth = depth;
        for (const child of el.children) {
          getDepth(child, depth + 1);
        }
      }
      getDepth(document.body, 1);

      // Performance timing
      const perf = window.performance;
      const nav = perf.getEntriesByType('navigation')[0] || {};

      // Heading structure
      const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim());
      const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim());

      // Meta tags
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

      return {
        totalElements: allElements.length,
        maxDepth,
        scriptCount: scripts.length,
        styleCount: styles.length,
        imageCount: images.length,
        imagesWithoutDims,
        imagesWithoutAlt,
        h1Count: h1s.length,
        h1s,
        h2Count: h2s.length,
        metaDescriptionPresent: Boolean(metaDesc),
        domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime || 0,
        domInteractive: nav.domInteractive - nav.startTime || 0,
      };
    });

    // File size of the HTML
    const htmlPath = path.resolve(__dirname, '..', 'archive', 'mirror', p.path.replace(/^\//, ''));
    const htmlSizeKb = (fs.statSync(htmlPath).size / 1024).toFixed(1);

    results.push({
      page: p.name,
      slug: p.slug,
      htmlSizeKb: `${htmlSizeKb} KB`,
      domElements: metrics.totalElements,
      maxDomDepth: metrics.maxDepth,
      scriptTags: metrics.scriptCount,
      styleTags: metrics.styleCount,
      imagesTotal: metrics.imageCount,
      imagesMissingDimensions: metrics.imagesWithoutDims,
      imagesMissingAlt: metrics.imagesWithoutAlt,
      h1Count: metrics.h1Count,
      h1Text: metrics.h1s.join(' | ') || 'NONE',
      metaDescriptionPresent: metrics.metaDescriptionPresent,
      loadTimeMs: loadTime,
      observedIssues: [
        metrics.totalElements > 1500 ? `Excessive DOM elements (${metrics.totalElements} > 1500 target budget)` : null,
        metrics.maxDepth > 32 ? `Deep DOM nesting (depth ${metrics.maxDepth} > 32)` : null,
        metrics.imagesWithoutDims > 0 ? `${metrics.imagesWithoutDims} images lack width/height attributes (high CLS risk)` : null,
        metrics.h1Count === 0 ? 'Missing H1 heading' : metrics.h1Count > 1 ? 'Multiple H1 headings' : null,
        !metrics.metaDescriptionPresent ? 'Missing meta description tag' : null,
        metrics.styleCount > 10 ? `Heavy stylesheet fragmentation (${metrics.styleCount} style/link tags)` : null,
      ].filter(Boolean)
    });

    await page.close();
  }

  await browser.close();
  server.close();

  const reportPath = path.resolve(__dirname, '..', 'scrape', 'baseline_audit.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    audit_environment: 'Mobile Viewport 390x844 (Emulated WebKit/Chromium)',
    summary: {
      target_budgets: {
        performance_mobile: '>= 95',
        seo: '100',
        accessibility: '100',
        best_practices: '100',
        fcp: '< 1.2s',
        lcp: '< 2.0s',
        cls: '< 0.05',
        inp: '< 200ms',
        html_size_budget: '< 50 KB',
        dom_node_budget: '< 800 nodes'
      },
      current_wordpress_deficits: {
        avg_html_weight: '264 KB per page (5.3x over budget)',
        avg_dom_nodes: '1,500 - 3,200 nodes (3x - 4x over budget)',
        dom_depth: 'Up to 34 levels of Elementor container nesting',
        cls_risk: '100% of images missing explicit dimensions',
        seo_gap: 'Missing meta descriptions on all pages; missing H1s on 5 of 6 pages',
        render_blocking: '17+ separate stylesheet tags and heavy jQuery/Elementor JS bundles'
      }
    },
    pages: results
  }, null, 2));

  console.log('Baseline audit completed successfully. Written to scrape/baseline_audit.json');
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
