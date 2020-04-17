import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Canvas } from '../../hostComponents';
describe('Canvas', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Canvas, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
