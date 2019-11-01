import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import TextArea from '../../../adapters/alipay/components/TextArea';

describe('TextArea', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<TextArea className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
