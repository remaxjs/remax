import * as path from 'path';
import getConfig from '../getConfig';
import rollupConfig from '../build/rollupConfig';

describe('config', () => {
  it('use cli options', () => {
    process.chdir(path.join(__dirname, 'fixtures/cli'));
    const result = getConfig();
    expect(result.output).toEqual('dist');
  });

  it('should has mock-plugins', function() {
    process.chdir(path.join(__dirname, 'fixtures/rollupOptions/function'));
    const adapter = require('../build/adapters/wechat');
    const remaxOptions = getConfig();
    expect(typeof remaxOptions.rollupOptions).toEqual('function');
    const options = rollupConfig(remaxOptions, false, adapter, {
      pages: [],
      app: {},
      config: {},
    } as any);
    expect(options.plugins!.some(e => e.name === 'mock-plugins')).toEqual(true);
  });
});
