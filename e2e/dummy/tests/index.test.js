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

  it('passes query to page', async () => {
    await goTo('/pages/query/index?name=foo');
    await expect(page).toMatch('query from props: foo');
    await expect(page).toMatch('query from hook: foo');
  });

  it('renders modal component', async () => {
    await goTo('/pages/modal/index');

    await expect(page).toMatch('modal component');
  });
});
