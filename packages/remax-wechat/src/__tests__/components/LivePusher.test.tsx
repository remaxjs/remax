import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import LivePusher from '../../hostComponents/LivePusher';

describe('LivePusher', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<LivePusher />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
