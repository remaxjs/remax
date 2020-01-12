import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import CoverImage from '../../hostComponents/CoverImage';

describe('CoverImage', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<CoverImage />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
