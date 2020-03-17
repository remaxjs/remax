import * as path from 'path';
import API from '../API';
import getConfig from '../getConfig';

describe('turboPages', () => {
  beforeEach(() => {
    API.adapter.name = 'wechat';
  });

  it('throw error when enabled in unsupported platform', () => {
    API.adapter.name = 'wechat';
    process.chdir(path.join(__dirname, 'fixtures/exception/turboPages'));
    expect(() => {
      getConfig();
    }).toThrowErrorMatchingInlineSnapshot(
      `"turboPages 目前仅支持 alipay 平台开启"`
    );
  });

  afterEach(() => {
    API.adapter.name = '';
  });
});
