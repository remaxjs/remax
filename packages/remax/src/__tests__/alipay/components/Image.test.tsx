import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Image from '../../../adapters/alipay/components/Image';

describe('Image', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Image className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
