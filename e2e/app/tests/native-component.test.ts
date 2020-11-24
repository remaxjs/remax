import { describeWithMini, goTo } from './helpers';

describeWithMini('小程序自定义组件', () => {
  it('正常渲染', async () => {
    const app = await goTo('/pages/native-component/index');

    await expect(app).toMatchElement('.am-badge');
    await expect(app).toMatchElement('#a', { text: 'a' });
    await expect(app).toMatchElement('.a-class', { text: 'a' });
    await expect(app).toMatchElement('#b', { text: 'b' });
    await expect(app).toMatchElement('#c', { text: 'c' });
    await expect(app).toMatchElement('#d', { text: 'd' });
    await expect(app).toMatchElement('#e', { text: 'e' });
    await expect(app).toMatchElement('#include', { text: 'include' });
    await expect(app).toMatchElement('#complex', { text: 'complex' });
    await expect(app).toMatchElement('#e', { text: 'e' });
    await expect(app).toMatchElement('#slot', { text: 'slot' });
    await expect(app).toMatchElement('#inner', { text: 'inner' });
    await expect(app).toMatchElement('#src', { text: 'src' });
    await expect(app).toMatchElement('#scope', { text: 'scope' });
  });

  it('引入包含自定义组件的模块', async () => {
    const app = await goTo('/pages/native-component/module');

    await expect(app).toMatchElement('#f', { text: 'f' });
    await expect(app).toMatchElement('#d', { text: 'd' });
  });

  it('自定义组件在 common chunk 中, chunk1', async () => {
    const app = await goTo('/pages/native-component/commonChunk1');

    await expect(app).toMatchElement('#a', { text: 'a' });
    await expect(app).toMatchElement('#b', { text: 'b' });
    await expect(app).toMatchElement('#c', { text: 'c' });
    await expect(app).toMatchElement('#d', { text: 'd' });
  });

  it('自定义组件在 common chunk 中, chunk2', async () => {
    const app = await goTo('/pages/native-component/commonChunk2');

    await expect(app).toMatchElement('#a', { text: 'a' });
    await expect(app).toMatchElement('#b', { text: 'b' });
    await expect(app).toMatchElement('#c', { text: 'c' });
    await expect(app).toMatchElement('#d', { text: 'd' });
  });
});
