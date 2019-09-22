import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Input from '../../../adapters/wechat/components/Input';

describe('Input', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Input value="" type="text" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
