import { launchApp, delay } from './helpers';
import { Page, Frame } from 'puppeteer';

declare const page: Page;

describe('首页', () => {
  let app: Frame;

  beforeAll(async () => {
    app = await launchApp('/pages/index/index');
  });

  it('渲染组件', async () => {
    const view = await app.waitForSelector('.class-view');
    await expect(view).toMatch('viewInnerText');
  });

  it('渲染动态创建的组件', async () => {
    const view = await app.waitForSelector('#text');
    await expect(view).toMatch('clonedElement');
  });

  it('正确引入图片', async () => {
    await app.waitForSelector('.cat-image');
    await app.waitForSelector('.dog-image');

    const images = await app.evaluate(async () => {
      const catImage = document.querySelector('.cat-image') as Element;
      const dogImage = document.querySelector('.dog-image') as Element;

      const extractImageUrl = (element: Element) =>
        (window.getComputedStyle(element).getPropertyValue('background-image') as any)
          .match(/\((.*?)\)/)[1]
          .replace(/('|")/g, '');

      const waitForImage = (src: string) =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
        });

      return [await waitForImage(extractImageUrl(catImage)), await waitForImage(extractImageUrl(dogImage))];
    });

    expect(images).toMatchInlineSnapshot(`
      Array [
        "http://127.0.0.1:8888/7285019d500b66029accbcfd7275e33a.jpg",
        "http://127.0.0.1:8888/6e6a60f044924f71fec456293be371f9.jpg",
      ]
    `);
  });

  it('触发点击事件', async () => {
    const view = await app.waitForSelector('#view');
    await expect(view).not.toMatch('valueIn:obj.a.b');
    await expect(view).not.toMatch('touchedTrigger');
    await view.click();
    await expect(view).toMatch('valueIn:obj.a.b');
    await expect(view).toMatch('touchedTrigger');
  });

  it('正确渲染 tabbar', async () => {
    await page.waitFor('.tr-tabbar-title');
    const titles = await page.evaluate(() => {
      const elements = document.querySelectorAll('.tr-tabbar-title');
      const titles = [];

      for (const element of elements) {
        titles.push(element.innerHTML);
      }

      return titles;
    });
    expect(titles[0]).toMatch('首页');
    expect(titles[1]).toMatch('其他');

    const images = await page.evaluate(() => {
      const elements = document.querySelectorAll('.tr-tabbar-image');
      const images = [];

      for (const element of elements) {
        images.push(window.getComputedStyle(element).getPropertyValue('background-image') as any);
      }

      return images;
    });
    expect(images[0]).toMatch('dog.jpg');
    expect(images[1]).toMatch('cat.jpg');
  });
});
