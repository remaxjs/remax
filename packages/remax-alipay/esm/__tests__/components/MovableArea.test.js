import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MovableArea } from '../../hostComponents';
describe('MovableArea', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(MovableArea, { width: 10, height: 10 }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
