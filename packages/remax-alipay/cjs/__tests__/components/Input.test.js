'use strict';
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var React = __importStar(require('react'));
var react_test_renderer_1 = __importDefault(require('react-test-renderer'));
var hostComponents_1 = require('../../hostComponents');
describe('Input', function() {
  it('render correctly', function() {
    var testRenderer = react_test_renderer_1.default.create(
      React.createElement(hostComponents_1.Input, { className: 'class' })
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('render placeholderStyle as inline style', function() {
    var color = '#ffffff';
    var component = react_test_renderer_1.default.create(
      React.createElement(hostComponents_1.Input, { placeholderStyle: { color: color } })
    );
    var instance = component.root.findByType('input');
    expect(instance.props.placeholderStyle).toEqual({
      color: color,
    });
  });
});
