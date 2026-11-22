const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');

async function extractFramesHttp() {
  const videoFile = path.resolve(__dirname, '..', 'designILiked', '0dc87a175c55337c7a184d73090680b3.mp4');
  if (!fs.existsSync(videoFile)) {
    console.error('Video file not found:', videoFile);
    return;
  }

  const stat = fs.statSync(videoFile);
  const total = stat.size;

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
          <body style="margin:0; background:#000; display:flex; align-items:center; justify-content:center; height:100vh;">
            <video id="vid" src="/video.mp4" controls autoplay muted style="width:100%; height:100%; object-fit:contain;"></video>
          </body>
        </html>
      `);
      return;
    }

    if (req.url === '/video.mp4') {
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const partialstart = parts[0];
        const partialend = parts[1];
        const start = parseInt(partialstart, 10);
        const end = partialend ? parseInt(partialend, 10) : total - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(videoFile, { start, end });
        res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
        });
        file.pipe(res);
      } else {
        res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
        fs.createReadStream(videoFile).pipe(res);
      }
    }
  });

  const PORT = 9876;
  await new Promise(r => server.listen(PORT, r));
  console.log(`HTTP video server listening on http://localhost:${PORT}`);

  const outDir = path.resolve(__dirname, '..', 'screenshots', 'design_reference');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Capture multiple key points of the video
  const durations = [1, 3, 5, 8, 12];
  for (let i = 0; i < durations.length; i++) {
    const sec = durations[i];
    await page.evaluate((s) => {
      const vid = document.getElementById('vid');
      if (vid) vid.currentTime = s;
    }, sec);
    await page.waitForTimeout(1000);
    const framePath = path.join(outDir, `design_ref_frame_${sec}s.png`);
    await page.screenshot({ path: framePath });
    console.log(`Saved screenshot at ${sec}s -> ${framePath}`);
  }

  await browser.close();
  server.close();
  console.log('Video analysis completed successfully!');
}

extractFramesHttp().catch(console.error);
