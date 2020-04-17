import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Swiper } from '../../hostComponents';
describe('Swiper', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Swiper, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
