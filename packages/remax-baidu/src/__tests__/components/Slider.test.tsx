import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Slider } from '../../hostComponents';

describe('Slider', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Slider />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
