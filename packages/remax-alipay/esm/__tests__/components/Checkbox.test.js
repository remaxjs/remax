import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Checkbox } from '../../hostComponents';
describe('Checkbox', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Checkbox, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
