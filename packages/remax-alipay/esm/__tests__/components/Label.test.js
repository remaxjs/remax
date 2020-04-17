import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Label } from '../../hostComponents';
describe('Label', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Label, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
