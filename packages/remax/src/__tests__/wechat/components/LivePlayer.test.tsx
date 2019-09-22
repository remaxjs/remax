import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import LivePlayer from '../../../adapters/wechat/components/LivePlayer';

describe('LivePlayer', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<LivePlayer />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
