import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { SwiperItem } from '../../hostComponents';
describe('SwiperItem', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(SwiperItem, { key: 'key' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
