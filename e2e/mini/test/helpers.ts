import { Page, Frame } from 'puppeteer';
import { setDefaultOptions } from 'expect-puppeteer/lib';

setDefaultOptions({ timeout: 1000 });
jest.setTimeout(20 * 1000);

declare const page: Page;

const getFrame = (type: 'page' | 'frame', doc: Page | Frame): Frame | undefined => {
  if (type === 'page') {
    return (doc as Page).frames()[0];
  }

  return (doc as Frame).childFrames()[0];
};

export const waitForFrame = (page: Page | Frame, type: 'page' | 'frame' = 'page') =>
  new Promise<Frame>(resolve => {
    const checkFrame = () => {
      const frame = getFrame(type, page);
      if (frame) {
        resolve(frame);
        return;
      }

      if (type === 'frame') {
        setTimeout(checkFrame);
      } else {
        (page as Page).once(`frameattached`, checkFrame);
      }
    };
    checkFrame();
  });

export const openPage = (url: string) => {
  const pageQuery = encodeURIComponent(url.replace(/^\//, ''));
  return page.goto(
    `http://river.alipay.net/appx.html?page=${pageQuery}&launchParams=%7B"enableTabBar"%3A"YES"%7D&url=http://127.0.0.1:8888/`
  );
};

export const launchApp = async (url: string) => {
  await openPage(url);
  const simulartorFrame = await waitForFrame(page);
  return waitForFrame(simulartorFrame, 'frame');
};

export const delay = (time = 100) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
