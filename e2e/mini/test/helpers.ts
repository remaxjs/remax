import { Page, Frame } from 'puppeteer';
import { setDefaultOptions } from 'expect-puppeteer/lib';

setDefaultOptions({ timeout: 1000 });
jest.setTimeout(20 * 1000);

declare const page: Page;

export const openPage = (url: string) => {
  const pageQuery = encodeURIComponent(url.replace(/^\//, ''));
  return page.goto(
    `https://appx.dev/appx.html?page=${pageQuery}&url=http://127.0.0.1:8888/dist/webng/&launchParams=%7B"appxRouteFramework"%3A"YES"%2C"appxRouteBizPrefix"%3A""%2C"enableTabBar"%3A"YES"%7D`
  );
};

export const launchApp = async (url: string) => {
  await openPage(url);
  await page.waitForFunction('window.frames.length === 2');
  const app = await page.frames()[1];
  return app;
};

export const delay = (time = 100) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
