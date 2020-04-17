import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Switch } from '../../hostComponents';
describe('Switch', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Switch, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
