import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageContainer } from '../../hostComponents';

describe('PageContainer', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<PageContainer />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
