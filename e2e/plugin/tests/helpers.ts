import { Page, Frame } from 'puppeteer';
import { setDefaultOptions } from 'expect-puppeteer/lib';

setDefaultOptions({ timeout: 1000 });
jest.setTimeout(60 * 1000);

declare const page: Page;

export const openPage = (url: string) => {
  const pageQuery = encodeURIComponent(url.replace(/^\//, ''));
  return page.goto(`http://river.alipay.net/appx.html?page=${pageQuery}&url=http://localhost:8989/`);
};

export const launchApp = async (url: string) => {
  await openPage(url);
  await page.waitForFunction('window.frames.length === 2');
  const app = await page.frames()[1];
  return app;
};
