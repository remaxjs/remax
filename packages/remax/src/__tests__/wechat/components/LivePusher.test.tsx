import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import LivePusher from '../../../adapters/wechat/components/LivePusher';

describe('LivePusher', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<LivePusher />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
