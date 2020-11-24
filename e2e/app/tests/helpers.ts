import { FrameBase } from 'puppeteer';

export const isMini = process.env.TEST_TARGET === 'mini';
export const isWeb = process.env.TEST_TARGET === 'web';
export const isMpa = process.env.MPA;

export const describeWithMini = isMini ? describe : describe.skip;
export const describeWithWeb = isWeb ? describe : describe.skip;
export const itWithMini = isMini ? it : it.skip;
export const itWithWeb = isWeb ? it : it.skip;
export const itWithWebMpb = isWeb && isMpa ? it : it.skip;
export const itWithWebSpa = isWeb && !isMpa ? it : it.skip;

function appendHTML(path: string) {
  const [page, query] = path.split('?');
  return [page, '.html', '?', query].join('');
}

export async function goTo(path: string): Promise<FrameBase> {
  const server = 'http://localhost:5678';
  if (isMini) {
    const pageQuery = encodeURIComponent(path.replace(/^\//, ''));
    await page.goto(
      `https://appx.dev/appx.html?page=${pageQuery}&url=${server}/&launchParams=%7B"appxRouteFramework"%3A"YES"%2C"appxRouteBizPrefix"%3A""%2C"enableTabBar"%3A"YES"%7D`
    );
    await page.waitForFunction('window.frames.length === 2');
    const app = await page.frames()[1];
    return app;
  }

  let url;
  if (process.env.MPA) {
    url = server + appendHTML(path);
  } else {
    url = `${server}#${path}`;
  }
  await page.goto(url);

  return page;
}
