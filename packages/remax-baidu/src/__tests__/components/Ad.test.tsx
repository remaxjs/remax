import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Ad } from '../../hostComponents';

describe('Ad', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Ad type="banner" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
