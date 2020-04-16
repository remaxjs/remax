import API from '../../API';
import webpackConfig from '../../build/webpackConfig';
import defaultOptions from '../../defaultOptions';
import { Platform } from '../../build/platform';
import getConfig from '../../getConfig';

jest.mock('../../getEntries', () => () => ({
  app: 'app.js',
  pages: [],
}));

describe('webpackConfig', () => {
  it('custom webpack options', () => {
    const remaxOptions = getConfig(false);
    const mode = 'production';
    API.registerAdapterPlugins('ali', remaxOptions);
    const options = webpackConfig(
      {
        ...defaultOptions,
        configWebpack: config => {
          config.mode(mode);
        },
      },
      Platform.ali
    );

    expect(options.mode).toBe(mode);
  });
});
