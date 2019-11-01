import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import MovableView from '../../../adapters/alipay/components/MovableView';

describe('MovableView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <MovableView width={10} height={10} />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
