import { Page } from 'puppeteer';
import { launchApp } from './helpers';
import { pluginId } from './constants.js';

declare const page: Page;

describe('原生页面', () => {
  it('渲染正确', async () => {
    const app = await launchApp('/pages/index/index');
    const view = await app.waitForSelector('.native-nav');
    await view.click();
    await app.waitFor(1000);
    const frames = page.frames();
    const pluginFrame = frames.find(f => {
      return f.name().indexOf(`${pluginId}/pages/hybrid/index`) > -1;
    });
    await expect(pluginFrame).toMatch('mini page');
    await expect(pluginFrame).toMatch('mini component');
  });
});
