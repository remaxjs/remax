import API from '../../API';
// import rollupConfig from '../../build/rollupConfig';
// import defaultOptions from '../../defaultOptions';
import getConfig from '../../getConfig';

jest.mock('../../getEntries', () => () => ({
  app: 'app.js',
  pages: [],
  images: [],
}));

describe('rollupConfig', () => {
  it('override rollup options', () => {
    const remaxOptions = getConfig(false);
    API.registerAdapterPlugins('alipay', remaxOptions);
    // const options = rollupConfig(
    //   {
    //     ...defaultOptions,
    //     rollupOptions: {
    //       treeshake: true,
    //     },
    //   },
    //   {}
    // );

    // expect(options.treeshake).toBe(true);
  });

  it('override rollup options with function', () => {
    // const options = rollupConfig(
    //   {
    //     ...defaultOptions,
    //     rollupOptions: options => {
    //       options.treeshake = true;
    //       return options;
    //     },
    //   },
    //   {}
    // );
    // expect(options.treeshake).toBe(true);
  });
});
