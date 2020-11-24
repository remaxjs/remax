import { describeWithMini, goTo } from './helpers';

describeWithMini('静态化页面', () => {
  it('正常渲染', async () => {
    const app = await goTo('/pages/turbo-page/index');

    // first view
    const view = await app.waitForSelector('.a-view');
    await expect(view).toMatch('expression entry');
    await expect(app).toMatchElement('div', { text: 'First View' });
    await expect(app).toMatchElement('div', { text: 'Fragment Text 1' });
    await expect(app).toMatchElement('div', { text: 'Fragment Text 2' });
    await expect(app).toMatchElement('div', { text: 'Fragment Text 3' });
    await expect(app).toMatchElement('div', { text: 'Fragment Text 4' });
    await expect(app).toMatchElement('div', { text: 'React.Fragment' });
    await expect(app).toMatchElement('div', { text: 'ModuleA' });
    await expect(app).toMatchElement('div', { text: 'Remax.Text' });
    await expect(app).toMatchElement('.am-badge');
    await expect(app).toMatchElement('.am-card');
    await expect(app).toMatchElement('.am-card-title', { text: '卡片标题1' });
    await expect(app).toMatchElement('.am-card-subtitle', {
      text: '副标题非必填1',
    });
    await expect(app).toMatchElement('div', { text: 'View inside Expression' });
    await expect(app).toMatchElement('div', {
      text: 'React Component First Child',
    });
    await expect(app).toMatchElement('div', {
      text: 'React Component Second Child',
    });
    await expect(app).toMatchElement('div', {
      text: 'React Component Third Child',
    });
    await expect(app).toMatchElement('.className', { text: 'Count: 1' });
    await expect(app).toMatchElement('#id1', { text: 'view' });
    await expect(app).toMatchElement('div', { text: 'custom view' });
    await expect(app).toMatchElement('#view > div', {
      text: 'create element children 1',
    });
    await expect(app).toMatchElement('div', { text: 'array map: 1' });
    await expect(app).toMatchElement('div', { text: 'array map: 2' });
    await expect(app).toMatchElement('div', { text: 'array map: 3' });
    await expect(app).toMatchElement('div', { text: 'array map: 4' });
    await expect(app).toMatchElement('div', { text: 'array map: 5' });
    await expect(app).toMatchElement('#spreadId', {
      text: 'Spread Attributes View',
    });
    await expect(app).toMatchElement('div', {
      text: 'long long long long long long long long long long long long text',
    });
    await expect(app).toMatchElement('div', { text: 'Literal Expression' });
    await expect(app).toMatchElement('div', { text: 'Deep Object View' });
    await expect(app).toMatchElement('div', { text: 'Conditional View' });
    await expect(app).toMatchElement('div', { text: 'plain-text-leaf' });

    const picker = await app.waitForSelector('#picker');
    await expect(picker).toMatch('picker');
    await picker.click();

    const col = await page.waitFor('.am-picker-col-item-selected');
    await expect(col).toMatch('1');
  });
});
