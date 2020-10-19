import node from '../node';
import { Meta } from '@remax/types';

describe('node', () => {
  it('meta', () => {
    const meta = node().meta as Meta;
    expect(meta.ejs).toBeDefined();
    expect(meta.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".swan",
        "src": "src",
        "tag": "import",
      }
    `);
    expect(meta.style).toMatchInlineSnapshot(`".css"`);
    expect(meta.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".sjs",
        "src": "src",
        "tag": "import-sjs",
      }
    `);
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
        componentName: 'view',
        phase: 'import',
      })
    ).toBeTruthy();

    expect(
      node().shouldHostComponentRegister!({
        componentName: 'view',
        phase: 'extra',
      })
    ).toBeTruthy();

    expect(
      node().shouldHostComponentRegister!({
        componentName: 'custom-view',
        additional: true,
        phase: 'import',
      })
    ).toBeTruthy();
  });
});
