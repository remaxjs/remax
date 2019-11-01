import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Map from '../../../adapters/alipay/components/Map';

describe('Map', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Map />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
