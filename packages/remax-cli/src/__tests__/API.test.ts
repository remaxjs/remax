import * as path from 'path';

process.chdir(path.join(__dirname, 'fixtures/api'));

import getConfig from '../getConfig';
import API from '../API';
import { Platform } from '@remax/types';

const remaxOptions = getConfig(false);

describe('api', () => {
  const api = new API();

  beforeAll(() => {
    api.registerPlugins(remaxOptions);
    api.registerAdapterPlugins(Platform.ali, remaxOptions);
  });

  it('install plugins in a variety of ways', () => {
    expect(api.plugins).toHaveLength(4);
  });

  it('install adapter plugin', () => {
    expect(api.adapter.name).toEqual('ali');
    expect(api.adapter.target).toEqual('ali');
    expect(api.adapter.packageName).toEqual('@remax/ali');
  });

  it('processProps', () => {
    const props = api.processProps('text', []);

    expect(props).toEqual(['p1', 'p2']);
  });

  it('shouldHostComponentRegister', () => {
    expect(api.shouldHostComponentRegister('view', 'import', false)).toBeTruthy();
    expect(api.shouldHostComponentRegister('swiper-item', 'import', false)).toBeFalsy();
  });

  it('getHostComponents', () => {
    expect(api.getHostComponents()).toBeDefined();
  });

  it('getMeta', () => {
    const extensions = api.getMeta();
    expect(extensions.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".sjs",
        "src": "from",
        "tag": "import-sjs",
      }
    `);
    expect(extensions.style).toMatchInlineSnapshot(`".acss"`);
    expect(extensions.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".axml",
        "src": "src",
        "tag": "import",
      }
    `);
  });
});
