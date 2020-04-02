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

  it('shouldHostComponentRegister', () => {
    expect(
      node().shouldHostComponentRegister!({
        componentName: 'swiper-item',
        phase: 'jsx',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        componentName: 'foo',
        additional: false,
        phase: 'extra',
      })
    ).toBeFalsy();

    expect(
      node().shouldHostComponentRegister!({
        componentName: 'foo',
        additional: true,
        phase: 'extra',
      })
    ).toBeTruthy();

    expect(
      node().shouldHostComponentRegister!({
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
