import * as path from 'path';
import getConfig from '../getConfig';

describe('turboPages', () => {
  it('throw error when enabled in unsupported platform', () => {
    process.chdir(path.join(__dirname, 'fixtures/exception/turboPages'));
    expect(() => {
      getConfig();
    }).toThrowErrorMatchingInlineSnapshot(
      `"turboPages 目前仅支持 alipay 平台开启"`
    );
  });
});
