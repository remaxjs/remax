import { launchApp } from './helpers';

describe('modal', () => {
  it('正常渲染', async () => {
    const app = await launchApp('/pages/modal/index');

    await expect(app).toMatchElement('#modal', { text: 'modal' });
  });
});
