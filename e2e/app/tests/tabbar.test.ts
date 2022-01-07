import { goTo } from './helpers';

describe('TabBar 跳转', () => {
  it('passes index page', async () => {
    const app = await goTo('/pages/index/index');
    await expect(app).toMatchElement('.remax-tab-bar');
  });

  it('passes image page', async () => {
    const app = await goTo('pages/image/index');
    await expect(app).not.toMatchElement('.remax-tab-bar');
  });
});
