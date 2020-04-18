import * as path from 'path';

process.chdir(path.join(__dirname, 'fixtures/API'));

import yargs from 'yargs';
import getConfig from '../getConfig';
import API from '../API';

const remaxOptions = getConfig(false);

describe('API', () => {
  beforeAll(() => {
    API.registerNodePlugins(remaxOptions);
    API.registerAdapterPlugins('ali', remaxOptions);
  });

  it('install plugins in a variety of ways', () => {
    expect(API.plugins).toHaveLength(5);
  });

  it('install adapter plugin', () => {
    expect(API.adapter.name).toEqual('ali');
    expect(API.adapter.target).toEqual('ali');
    expect(API.adapter.packageName).toEqual('@remax/ali');
  });

  it('extends CLI', () => {
    const newYargs = API.extendsCLI({ cli: yargs });
    const argv = newYargs.parse();

    expect(argv.cat).toEqual(33);
  });

  it('processProps', () => {
    const props = API.processProps('text', []);

    expect(props).toEqual(['p1', 'p2']);
  });

  it('shouldHostComponentRegister', () => {
    expect(API.shouldHostComponentRegister('view', 'import', false)).toBeTruthy();
    expect(API.shouldHostComponentRegister('swiper-item', 'import', false)).toBeFalsy();
  });

  it('getHostComponents', () => {
    expect(API.getHostComponents()).toBeDefined();
  });

  it('getMeta', () => {
    const extensions = API.getMeta();
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
