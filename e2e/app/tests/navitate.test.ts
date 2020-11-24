import { goTo, itWithWebSpa } from './helpers';

describe('navigate', () => {
  itWithWebSpa('navigates page', async () => {
    const app = await goTo('/pages/navigate/one/index');
    await app.waitForSelector('#btn');
    const button = await app.$('#btn');
    await button!.click();
    await expect(app).toMatch('page two');
  });
});
