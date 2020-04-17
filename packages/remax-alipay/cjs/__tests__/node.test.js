'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var node_1 = __importDefault(require('../node'));
describe('node', function() {
  it('meta', function() {
    var meta = node_1.default().meta;
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
      node_1.default().shouldHostComponentRegister({
        componentName: 'swiper-item',
        phase: 'import',
      })
    ).toBeFalsy();
    expect(
      node_1.default().shouldHostComponentRegister({
        componentName: 'picker-view-column',
        phase: 'import',
      })
    ).toBeFalsy();
    expect(
      node_1.default().shouldHostComponentRegister({
        componentName: 'view',
        phase: 'import',
      })
    ).toBeTruthy();
    expect(
      node_1.default().shouldHostComponentRegister({
        componentName: 'view',
        phase: 'extra',
      })
    ).toBeTruthy();
    expect(
      node_1.default().shouldHostComponentRegister({
        componentName: 'custom-view',
        additional: true,
        phase: 'import',
      })
    ).toBeTruthy();
  });
});
