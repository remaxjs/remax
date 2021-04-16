import API from '../API';
import type { Plugin } from '@remax/types';

function entries(): Plugin {
  return {};
}

function props1(): Plugin {
  return {
    processProps({ props }) {
      return [...props, 'p1'];
    },
  };
}

function props2(): Plugin {
  return {
    processProps({ props }) {
      return [...props, 'p2'];
    },
  };
}

describe('api', () => {
  const api = new API();

  beforeAll(() => {
    api.registerPlugins([entries(), props1(), props2()]);
    api.registerAdapterPlugins('ali');
  });

  it('install plugins in a variety of ways', () => {
    expect(api.plugins).toHaveLength(4);
  });

  it('install adapter plugin', () => {
    expect(api.adapter.target).toEqual('ali');
    expect(api.adapter.packageName).toEqual('@remax/ali');
  });

  it('processProps', () => {
    const props = api.processProps('text', []);

    expect(props).toEqual(['p1', 'p2']);
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

  it('onAppConfig', () => {
    api.registerPlugins([
      {
        onAppConfig({ config }) {
          config.window = {
            ...config.window,
            defaultTitle: 'hello,',
          };
          return config;
        },
      },
    ]);

    expect(api.onAppConfig({})).toEqual({
      window: {
        defaultTitle: 'hello,',
      },
    });
  });

  it('onPageConfig', () => {
    api.registerPlugins([
      {
        onPageConfig({ page, config }) {
          if (page === 'pages/home/index') {
            config.defaultTitle = 'home';
          }
          return config;
        },
      },
    ]);

    expect(
      api.onPageConfig({
        page: 'pages/index/index',
        config: {},
      })
    ).toEqual({});

    expect(
      api.onPageConfig({
        page: 'pages/home/index',
        config: {},
      })
    ).toEqual({ defaultTitle: 'home' });
  });
});
