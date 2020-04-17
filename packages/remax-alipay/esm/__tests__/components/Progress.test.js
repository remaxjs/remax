import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Progress } from '../../hostComponents';
describe('Progress', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Progress, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
