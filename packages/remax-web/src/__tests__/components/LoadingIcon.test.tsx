import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import LoadingIcon from '../../LoadingIcon';

describe('LoadingIcon', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<LoadingIcon />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render with animate', () => {
    const testRenderer = TestRenderer.create(<LoadingIcon animate={true} />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
