import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { PickerView } from '../../hostComponents';
describe('PickerView', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(PickerView, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
