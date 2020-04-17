import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Button } from '../../hostComponents';
describe('Button', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Button, { className: 'class' }, 'Button'));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
