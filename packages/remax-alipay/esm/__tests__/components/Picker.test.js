import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Picker } from '../../hostComponents';
describe('Picker', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Picker, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
