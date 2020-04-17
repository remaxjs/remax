import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { PickerViewColumn } from '../../hostComponents';
describe('PickerViewColumn', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(PickerViewColumn, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
