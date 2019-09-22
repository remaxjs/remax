import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Radio from '../../../adapters/alipay/components/Radio';

describe('Radio', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Radio />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
