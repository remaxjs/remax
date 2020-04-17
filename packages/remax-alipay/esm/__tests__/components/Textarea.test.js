import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Textarea } from '../../hostComponents';
describe('Textarea', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Textarea, { className: 'class' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
