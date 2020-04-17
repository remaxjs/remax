import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from '../../hostComponents';
describe('Text', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Text, { className: 'class' }, 'text'));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
