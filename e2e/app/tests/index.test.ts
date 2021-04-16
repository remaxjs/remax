import { FrameBase } from 'puppeteer';
import { goTo, itWithMini, itWithWebSpa } from './helpers';

describe('index', () => {
  let app: FrameBase;

  beforeAll(async () => {
    app = await goTo('/pages/index/index');
  });

  it('renders view correctly', async () => {
    await expect(app).toMatch('hello');
  });

  itWithMini('renders tabbar correctly', async () => {
    await page.waitFor('.tr-tabbar-title');
    const titles = await page.evaluate(() => {
      const elements = document.querySelectorAll('.tr-tabbar-title');
      const titles = [];

      for (const element of elements) {
        titles.push(element.innerHTML);
      }

      return titles;
    });
    await expect(titles[0]).toMatch('首页');
    await expect(titles[1]).toMatch('其他');

    const images = await page.evaluate(() => {
      const elements = document.querySelectorAll('.tr-tabbar-image');
      const images = [];

      for (const element of elements) {
        images.push(window.getComputedStyle(element).getPropertyValue('background-image') as any);
      }

      return images;
    });
    await expect(images[0]).toMatch('dog.jpg');
    await expect(images[1]).toMatch('cat.jpg');
  });

  itWithWebSpa('renders tabbar correctly', async () => {
    await expect(app).toMatch('首页');
    await expect(app).toMatch('其他');
  });
});
