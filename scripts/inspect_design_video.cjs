const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function extractVideoFrames() {
  const videoPath = path.resolve(__dirname, '..', 'designILiked', '0dc87a175c55337c7a184d73090680b3.mp4');
  if (!fs.existsSync(videoPath)) {
    console.log('Video not found at:', videoPath);
    return;
  }

  const outDir = path.resolve(__dirname, '..', 'screenshots', 'design_reference');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:black; display:flex; align-items:center; justify-content:center; height:100vh;">
        <video id="vid" src="file://${videoPath.replace(/\\/g, '/')}" style="max-width:100%; max-height:100%;" muted></video>
      </body>
    </html>
  `;
  const htmlPath = path.resolve(__dirname, 'temp_video_player.html');
  fs.writeFileSync(htmlPath, html);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.goto(`file://${htmlPath.replace(/\\/g, '/')}`);

  const duration = await page.evaluate(async () => {
    const vid = document.getElementById('vid');
    await new Promise(r => { vid.onloadedmetadata = r; });
    return vid.duration;
  });

  console.log(`Video loaded. Duration: ${duration.toFixed(1)}s`);

  const timestamps = [1, Math.min(3, duration / 2), Math.min(6, duration * 0.75)];
  for (let i = 0; i < timestamps.length; i++) {
    const t = timestamps[i];
    await page.evaluate(async (time) => {
      const vid = document.getElementById('vid');
      vid.currentTime = time;
      await new Promise(r => { vid.onseeked = r; });
    }, t);
    const framePath = path.join(outDir, `design_ref_frame_${i + 1}.png`);
    await page.screenshot({ path: framePath });
    console.log(`Captured frame at ${t}s -> ${framePath}`);
  }

  await browser.close();
  fs.unlinkSync(htmlPath);
  console.log('Video frame extraction complete.');
}

extractVideoFrames().catch(console.error);
