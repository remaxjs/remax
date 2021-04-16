import { FrameBase } from 'puppeteer';
import { goTo } from './helpers';

describe('生命周期', () => {
  let app: FrameBase;

  beforeAll(async () => {
    app = await goTo('/pages/lifecycle/index');
  });

  it('注册生命周期', async () => {
    await expect(app).toMatch('launch');
    await expect(app).toMatch('show');
  });
});
