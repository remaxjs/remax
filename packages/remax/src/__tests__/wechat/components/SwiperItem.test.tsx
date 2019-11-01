import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import SwiperItem from '../../../adapters/wechat/components/SwiperItem';

describe('SwiperItem', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<SwiperItem key="key" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
