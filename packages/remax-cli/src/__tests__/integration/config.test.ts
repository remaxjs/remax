import * as path from 'path';
import build from './helpers/build';
import getConfig from '../../getConfig';
import { Platform } from '@remax/types';
import runTest from './helpers/runTest';

describe('remax config', () => {
  it('override output', () => {
    process.chdir(path.join(__dirname, 'fixtures/config'));
    const result = getConfig();
    expect(result.output).toEqual('build');
  });

  it('schema validation', () => {
    process.chdir(path.join(__dirname, 'fixtures/exception/remax.config'));

    expect(() => {
      getConfig();
    }).toThrowErrorMatchingSnapshot();
  });

  it('throw error when missing pages config in app.config', async () => {
    await expect(build('exception', Platform.ali)).rejects.toThrow('app.config.js|ts 并未配置页面参数');
  });

  runTest('config-add-css-rule');
});
