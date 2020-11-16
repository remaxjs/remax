import { describeWithMini, goTo } from './helpers';
import { FrameBase } from 'puppeteer';

describeWithMini('原生页面', () => {
  let app: FrameBase;

  beforeAll(async () => {
    app = await goTo('/pages/hybrid/index');
  });

  it('显示正确', async () => {
    await expect(app).toMatch('mini page');
  });
});
