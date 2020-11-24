import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Lottie } from '../../hostComponents';

describe('Lottie', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Lottie id="foo" className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
