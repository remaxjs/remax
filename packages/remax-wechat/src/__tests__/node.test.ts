import node from '../node';
import type { Meta } from '@remax/types';

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
  });
});
