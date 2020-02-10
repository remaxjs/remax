import node from '../node';
import { Meta } from 'remax-types';

describe('node', () => {
  it('meta', () => {
    const meta = node().meta as Meta;
    expect(meta.ejs).toBeDefined();
    expect(meta.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".wxml",
        "src": "src",
        "tag": "import",
      }
    `);
    expect(meta.style).toMatchInlineSnapshot(`".wxss"`);
    expect(meta.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".wxs",
        "src": "src",
        "tag": "wxs",
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
      subpackages: [
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
        list: [
          { iconPath: 'icon1', selectedIconPath: 'activeIcon1' },
          { iconPath: 'icon2', selectedIconPath: 'activeIcon2' },
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
        phase: 'jsx',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'foo',
        additional: false,
        phase: 'extra',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'foo',
        additional: true,
        phase: 'extra',
      })
    ).toBeTruthy();

    expect(
      node().shouldHostComponentRegister!({
        remaxOptions,
        componentName: 'view',
        phase: 'import',
      })
    ).toBeTruthy();
  });

  it('processProps', () => {
    expect(
      node().processProps!({
        node: {
          openingElement: {
            attributes: [
              {
                type: 'JSXSpreadAttribute',
              },
            ],
          },
        } as any,
        props: ['p1'],
        componentName: 'view',
        additional: false,
      })
    ).toEqual(['p1']);

    expect(
      node().processProps!({
        props: ['p1'],
        componentName: 'foo',
        additional: true,
      })
    ).toEqual(['p1']);

    expect(
      node().processProps!({
        props: ['p1'],
        componentName: 'foo',
      })
    ).toEqual([]);
  });
});
