import { goTo } from './helpers';
import { FrameBase } from 'puppeteer';

describe('错误处理', () => {
  let app: FrameBase;

  beforeAll(async () => {
    app = await goTo('/pages/error/index');
  });

  if (process.env.NODE_ENV === 'production') {
    it('显示自定义错误页', async () => {
      await expect(app).toMatch('custom error');
    });
  } else {
    it('显示错误页', async () => {
      await expect(app).toMatch("TypeError: Cannot read property 'name' of undefined");
    });
  }
});
