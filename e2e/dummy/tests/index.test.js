import 'expect-puppeteer';

function goTo(path) {
  return page.goto('http://localhost:5678#' + path);
}

describe('works', () => {
  beforeAll(async () => {
    await goTo('/');
  });

  it('renders page one', async () => {
    await expect(page).toMatch('page one');
  });

  it('active first tab', async () => {
    const tabImage = await page.evaluate(() => {
      const tab = document.querySelector('.remax-tab-item-image');

      const extractImageUrl = element =>
        window
          .getComputedStyle(element)
          .getPropertyValue('background-image')
          .match(/\((.*?)\)/)[1]
          .replace(/('|")/g, '');

      return extractImageUrl(tab);
    });

    expect(decodeURIComponent(tabImage)).toBe('http://localhost:5678/选中图片地址');
  });

  it('renders page two', async () => {
    await goTo('/pages/two/index');
    await expect(page).toMatch('page two');
  });

  it('useQuery', async () => {
    await goTo('/pages/two/index?q=query');
    await expect(page).toMatch('query');
  });
});
