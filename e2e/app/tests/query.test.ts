import { goTo } from './helpers';

describe('页面参数', () => {
  it('passes query to page', async () => {
    const app = await goTo('/pages/query/index?name=foo');
    await expect(app).toMatch('query from props: foo');
    await expect(app).toMatch('query from hook: foo');
  });
});
