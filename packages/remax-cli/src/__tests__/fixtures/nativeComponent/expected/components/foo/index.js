import { objectWithoutProperties as _objectWithoutProperties } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React__default from 'react';
import propsAlias from '../npm/remax/cjs/adapters/alipay/components/propsAlias.js';

Component({});
var Foo = (function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement('foo-0', propsAlias(props, true), children);
});

export default Foo;
