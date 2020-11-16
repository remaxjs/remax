import { launchApp } from './helpers';
import { Page, Frame } from 'puppeteer';
import { pluginId } from './constants.js';

declare const page: Page;

const f = id => `p-${pluginId}-${id}`;
const cl = id => `.${f(id)}`;
const idf = id => `#${f(id)}`;

describe('首页', () => {
  let app: Frame;

  beforeAll(async () => {
    app = await launchApp('/pages/index/index');
  });

  it('渲染插件组件', async () => {
    const greeting = await app.waitForSelector(cl('greeting'));
    await expect(greeting).toMatch('Hello Greeting!!!');
    await expect(greeting).toMatch('componentInstance is object');
    await expect(greeting).toMatch('aaa');
    await greeting.click();
    await expect(greeting).toMatch('bbb');
    // 插件组件里面依赖的自定义组件
    const badge = await app.waitForSelector(cl('am-badge-text-inner'));
    await expect(badge).toMatch('badgeText');
  });

  describe('nav to page', () => {
    let pluginIndexFrame = null;

    beforeAll(async () => {
      const view = await app.waitForSelector('.nav');
      await view.click();
      await app.waitFor(1000);

      const frames = page.frames();
      pluginIndexFrame = frames.find(f => {
        return f.name().indexOf(`${pluginId}/pages/index/index`) > -1;
      });
    });

    it('触发点击事件', async () => {
      const view = await pluginIndexFrame.$(idf('view'));
      await expect(view).not.toMatch('valueIn:obj.a.b');
      await expect(view).not.toMatch('touchedTrigger');
      await view.click();
      await expect(view).toMatch('valueIn:obj.a.b');
      await expect(view).toMatch('touchedTrigger');
    });

    it('跳转插件页面', async () => {
      const greeting = await pluginIndexFrame.$(cl('xbGreet'));
      const badge = await pluginIndexFrame.$(cl('am-badge-text-inner'));
      await expect(greeting).toMatch('Hello Greeting!!! xbGreet');
      await expect(badge).toMatch('badgeText');
    });
  });
});
