import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status === 200) return true;
    } catch (e) {
      // wait and retry
    }
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error(`Server failed to start at ${url} within ${timeoutMs}ms`);
}

async function verify() {
  const PORT = 3456;
  const baseUrl = `http://localhost:${PORT}`;
  console.log(`Starting Next.js production server on ${baseUrl}...`);

  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    cwd: process.cwd(),
    stdio: 'inherit'
  });

  const cleanup = () => {
    try {
      server.kill('SIGTERM');
    } catch (e) {}
  };

  process.on('exit', cleanup);
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  try {
    await waitForServer(baseUrl);
    console.log(`Server is ready! Running Playwright tests...`);

    const screenshotDir = '/Users/macbookm4/.gemini/antigravity-ide/brain/057a6b40-871b-4c30-ad45-752f66786ff8/scratch';

    const browser = await chromium.launch({ headless: true });

    const viewports = [
      { name: 'desktop', width: 1440, height: 900, isMobile: false },
      { name: 'mobile', width: 390, height: 844, isMobile: true, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' }
    ];

    const pagesToTest = [
      { name: 'homepage', path: '/' },
      { name: 'aged-care', path: '/aged-care-at-home-perth' },
      { name: 'private-nursing', path: '/private-nursing' }
    ];

    const results = [];

    for (const vp of viewports) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        userAgent: vp.userAgent || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
      });

      const page = await context.newPage();

      for (const p of pagesToTest) {
        const targetUrl = `${baseUrl}${p.path}`;
        console.log(`\nTesting [${vp.name.toUpperCase()}]: ${targetUrl}`);
        const res = await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForTimeout(1000);

        const title = await page.title();
        const h1 = await page.$eval('h1', el => el.innerText.trim()).catch(() => 'no h1 found');
        
        const screenshotFilename = `test_${vp.name}_${p.name}.png`;
        const screenshotPath = path.join(screenshotDir, screenshotFilename);
        
        await page.screenshot({ path: screenshotPath, fullPage: false });

        console.log(`[${res.status()}] Title: "${title}"`);
        console.log(`H1: "${h1}"`);
        console.log(`Screenshot saved: ${screenshotPath}`);

        results.push({
          viewport: vp.name,
          page: p.name,
          status: res.status(),
          title,
          h1,
          screenshot: screenshotPath
        });
      }

      await context.close();
    }

    await browser.close();

    console.log('\n=== Comprehensive Browser Verification Complete ===');
    console.log(JSON.stringify(results, null, 2));

  } finally {
    cleanup();
  }
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
