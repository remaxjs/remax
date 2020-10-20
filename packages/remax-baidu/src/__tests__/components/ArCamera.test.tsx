import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ArCamera } from '../../hostComponents';

describe('ArCamera', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<ArCamera />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
