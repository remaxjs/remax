import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import PullToRefresh from '../../PullToRefresh';

describe('PullToRefresh', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<PullToRefresh />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
