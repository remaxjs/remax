import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Icon } from '../../hostComponents';
describe('Icon', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Icon, { className: 'class', type: 'info' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
