import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { RadioGroup } from '../../hostComponents';
describe('RadioGroup', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(RadioGroup, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
