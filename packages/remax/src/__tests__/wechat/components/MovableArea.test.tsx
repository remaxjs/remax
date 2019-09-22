import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import MovableArea from '../../../adapters/wechat/components/MovableArea';

describe('MovableArea', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<MovableArea />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
