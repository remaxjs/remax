import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Navigator } from '../../hostComponents';
describe('Navigator', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Navigator, { url: 'url' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
