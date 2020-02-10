import node from '../node';
import { MetaOptions, Meta } from 'remax-types';

describe('node', () => {
  it('meta', () => {
    const getMeta = node().meta! as (options: MetaOptions) => Meta;
    const remaxOptions: any = { compiler: 'default' };
    const meta = getMeta({ remaxOptions });

    expect(meta.ejs).toBeDefined();
    expect(meta.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".axml",
        "src": "src",
        "tag": "import",
      }
    `);
    expect(meta.style).toMatchInlineSnapshot(`".acss"`);
    expect(meta.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".sjs",
        "src": "from",
        "tag": "import-sjs",
      }
    `);
    expect(meta.include).toMatchInlineSnapshot(`
      Object {
        "src": "src",
        "tag": "include",
      }
    `);
  });

  it('getEntreis throw Error when pages are empty', () => {
    const getEntryPath = (path: string) => path;
    const appManifest = {
      pages: [],
    };

    const remaxOptions: any = {
      cwd: 'cwd',
      rootDir: 'src',
    };

    expect(() => {
      node().getEntries!({
        appManifest,
        remaxOptions,
        getEntryPath,
      });
    }).toThrowError();
  });

  it('getEntries', () => {
    const getEntryPath = (path: string) => path;
    const appManifest = {
      pages: ['page1', 'page2'],
      subPackages: [
        {
          root: 'sub1',
          pages: ['sub1/page1', 'sub1/page2'],
        },
        {
          root: 'sub2',
          pages: ['sub2/page1', 'sub2/page2'],
        },
      ],
      tabBar: {
        items: [
          { icon: 'icon1', activeIcon: 'activeIcon1' },
          { icon: 'icon2', activeIcon: 'activeIcon2' },
        ],
      },
    };

    const remaxOptions: any = {
      cwd: 'cwd',
      rootDir: 'src',
    };

    const entries = node().getEntries!({
      appManifest,
      remaxOptions,
      getEntryPath,
    });

    expect(entries.app).toEqual('');
    expect(entries.images).toHaveLength(4);
    expect(entries.pages).toHaveLength(6);
  });

  it('shouldHostComponentRegister', () => {
    const remaxOptions: any = {
      compiler: 'default',
    };

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'swiper-item',
        phase: 'import',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'picker-view-column',
        phase: 'import',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'view',
        phase: 'import',
      })
    ).toBeTruthy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'view',
        phase: 'extra',
      })
    ).toBeTruthy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'custom-view',
        additional: true,
        phase: 'import',
      })
    ).toBeTruthy();
  });

  describe('static compiler', () => {
    it('meta', () => {
      const getMeta = node().meta! as (options: MetaOptions) => Meta;
      const remaxOptions: any = { compiler: 'static' };
      const meta = getMeta({ remaxOptions });

      expect(!!meta.ejs.base).toBeTruthy();
      expect(meta.template).toMatchInlineSnapshot(`
              Object {
                "extension": ".axml",
                "src": "src",
                "tag": "import",
              }
          `);
      expect(meta.style).toMatchInlineSnapshot(`".acss"`);
      expect(meta.jsHelper).toMatchInlineSnapshot(`
              Object {
                "extension": ".sjs",
                "src": "from",
                "tag": "import-sjs",
              }
          `);
      expect(meta.include).toMatchInlineSnapshot(`
              Object {
                "src": "src",
                "tag": "include",
              }
          `);
    });

    it('shouldHostComponentRegister', () => {
      const remaxOptions: any = {
        compiler: 'static',
      };

      expect(
        node().shouldHostComponentRegister!({
          remaxOptions,
          componentName: 'swiper-item',
          phase: 'import',
        })
      ).toBeFalsy();

      expect(
        node().shouldHostComponentRegister!({
          remaxOptions,
          componentName: 'picker-view-column',
          phase: 'import',
        })
      ).toBeFalsy();

      expect(
        node().shouldHostComponentRegister!({
          remaxOptions,
          componentName: 'view',
          phase: 'import',
        })
      ).toBeTruthy();

      expect(
        node().shouldHostComponentRegister!({
          remaxOptions,
          componentName: 'view',
          phase: 'extra',
        })
      ).toBeFalsy();

      expect(
        node().shouldHostComponentRegister!({
          remaxOptions,
          componentName: 'custom-view',
          additional: true,
          phase: 'import',
        })
      ).toBeTruthy();
    });
  });
});
