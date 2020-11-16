import { FrameBase } from 'puppeteer';
import { goTo } from './helpers';

describe('image', () => {
  let app: FrameBase;

  beforeAll(async () => {
    app = await goTo('/pages/image/index');
  });

  it('renders image correctly', async () => {
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

    expect(images).toEqual([
      'http://localhost:5678/7285019d500b66029accbcfd7275e33a.jpg',
      'http://localhost:5678/6e6a60f044924f71fec456293be371f9.jpg',
    ]);
  });
});
