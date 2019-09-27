import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Input from '../../../adapters/alipay/components/Input';

describe('Input', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Input className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
