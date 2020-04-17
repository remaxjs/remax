import node from '../node';
describe('node', function() {
  it('meta', function() {
    var meta = node().meta;
    expect(meta.ejs).toBeDefined();
    expect(meta.staticEjs).toBeDefined();
    expect(meta.template).toMatchInlineSnapshot(
      '\n      Object {\n        "extension": ".axml",\n        "src": "src",\n        "tag": "import",\n      }\n    '
    );
    expect(meta.style).toMatchInlineSnapshot('".acss"');
    expect(meta.jsHelper).toMatchInlineSnapshot(
      '\n      Object {\n        "extension": ".sjs",\n        "src": "from",\n        "tag": "import-sjs",\n      }\n    '
    );
  });
  it('shouldHostComponentRegister', function() {
    expect(
      node().shouldHostComponentRegister({
        componentName: 'swiper-item',
        phase: 'import',
      })
    ).toBeFalsy();
    expect(
      node().shouldHostComponentRegister({
        componentName: 'picker-view-column',
        phase: 'import',
      })
    ).toBeFalsy();
    expect(
      node().shouldHostComponentRegister({
        componentName: 'view',
        phase: 'import',
      })
    ).toBeTruthy();
    expect(
      node().shouldHostComponentRegister({
        componentName: 'view',
        phase: 'extra',
      })
    ).toBeTruthy();
    expect(
      node().shouldHostComponentRegister({
        componentName: 'custom-view',
        additional: true,
        phase: 'import',
      })
    ).toBeTruthy();
  });
});
