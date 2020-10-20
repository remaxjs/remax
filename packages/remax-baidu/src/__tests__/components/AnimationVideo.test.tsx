import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { AnimationVideo } from '../../hostComponents';

describe('AnimationVideo', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<AnimationVideo />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
