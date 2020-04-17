import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Map } from '../../hostComponents';
describe('Map', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Map, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
