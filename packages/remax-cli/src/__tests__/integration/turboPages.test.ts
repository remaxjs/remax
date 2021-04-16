import { testBuildApp } from './helpers/runTest';

describe('turbo pages', () => {
  testBuildApp('turbo-pages-basic');
  testBuildApp('turbo-pages-fragment-root');
  testBuildApp('turbo-pages-picker-view');
  testBuildApp('turbo-pages-swiper');
});
