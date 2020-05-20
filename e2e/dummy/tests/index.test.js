import 'expect-puppeteer';

function goTo(path) {
  return page.goto('http://localhost:5678#' + path);
}

describe('Google', () => {
  beforeAll(async () => {
    await goTo('/');
  });

  it('renders page one', async () => {
    await expect(page).toMatch('page one');
  });

  it('renders page two', async () => {
    await goTo('/pages/two/index');
    await expect(page).toMatch('page two');
  });
});
