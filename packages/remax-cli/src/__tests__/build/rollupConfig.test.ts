import rollupConfig from '../../build/rollupConfig';
import * as alipay from '../../build/adapters/alipay';
import defaultOptions from '../../defaultOptions';

jest.mock('../../getEntries', () => () => ({
  app: 'app.js',
  pages: [],
  images: [],
}));

describe('rollupConfig', () => {
  it('override rollup options', () => {
    const options = rollupConfig(
      {
        ...defaultOptions,
        rollupOptions: {
          treeshake: true,
        },
      },
      {},
      alipay
    );

    expect(options.treeshake).toBe(true);
  });

  it('override rollup options with function', () => {
    const options = rollupConfig(
      {
        ...defaultOptions,
        rollupOptions: options => {
          (options.input as string[]).push('foo.js');
          return options;
        },
      },
      {},
      alipay
    );

    expect(options.input).toEqual(['app.js', 'foo.js']);
  });
});
