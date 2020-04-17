import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { CheckboxGroup } from '../../hostComponents';
describe('CheckboxGroup', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(CheckboxGroup, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
