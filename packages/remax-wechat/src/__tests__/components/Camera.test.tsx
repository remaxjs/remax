import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Camera } from '../../hostComponents';

describe('Camera', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Camera />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
