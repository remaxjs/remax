import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Radio } from '../../hostComponents';
describe('Radio', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Radio, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
