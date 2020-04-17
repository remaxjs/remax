import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Image } from '../../hostComponents';
describe('Image', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Image, { className: 'class' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
