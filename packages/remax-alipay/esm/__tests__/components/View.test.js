import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { View } from '../../hostComponents';
describe('View', function() {
  it('render correctly', function() {
    var callback = function() {
      return void 0;
    };
    var testRenderer = TestRenderer.create(
      React.createElement(View, { onAnimationStart: callback, catchClick: callback, className: 'class' }, 'view')
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
