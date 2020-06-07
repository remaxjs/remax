import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Lifestyle } from '../../hostComponents';

describe('Lifestyle', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Lifestyle publicId="" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
