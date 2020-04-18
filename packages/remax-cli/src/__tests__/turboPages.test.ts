import * as path from 'path';
import API from '../API';
import getConfig from '../getConfig';

describe('turboPages', () => {
  beforeEach(() => {
    API.adapter.name = 'wechat';
    API.adapter.target = 'wechat';
  });

  it('throw error when enabled in unsupported platform', () => {
    process.chdir(path.join(__dirname, 'fixtures/exception/turboPages'));
    expect(() => {
      getConfig();
    }).toThrowErrorMatchingInlineSnapshot(`"turboPages 目前仅支持 ali 平台开启"`);
  });

  afterEach(() => {
    API.adapter.name = '';
  });
});
