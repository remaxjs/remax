import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { View } from '../../hostComponents';

describe('View', () => {
  it('render correctly', () => {
    const callback = () => void 0;

    const testRenderer = TestRenderer.create(
      <View ariaLabel="view" onAnimationStart={callback} catchClick={callback} className="class">
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
