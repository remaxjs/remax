import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Form } from '../../hostComponents';
describe('Form', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Form, { reportSubmit: true }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
