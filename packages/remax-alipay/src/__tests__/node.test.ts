import node from '../node';

describe('node', () => {
  it('meta', () => {
    expect(node().meta?.ejs).toBeDefined();
    expect(node().meta?.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".axml",
        "src": "src",
        "tag": "import",
      }
    `);
    expect(node().meta?.style).toMatchInlineSnapshot(`".acss"`);
    expect(node().meta?.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".sjs",
        "src": "from",
        "tag": "import-sjs",
      }
    `);
    expect(node().meta?.include).toMatchInlineSnapshot(`
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
    expect(
      node().shouldHostComponentRegister!({
        componentName: 'swiper-item',
        phase: 'import',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        componentName: 'picker-view-column',
        phase: 'import',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        componentName: 'view',
        phase: 'import',
      })
    ).toBeTruthy();
  });
});
