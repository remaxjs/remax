import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { View } from '../../hostComponents';

describe('View', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <View className="class" ariaLabel="view">
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
