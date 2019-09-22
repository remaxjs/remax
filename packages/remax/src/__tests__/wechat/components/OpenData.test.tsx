import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import OpenData from '../../../adapters/wechat/components/OpenData';

describe('OpenData', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<OpenData />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
