import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MovableView } from '../../hostComponents';
describe('MovableView', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(MovableView, { width: 10, height: 10 }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
