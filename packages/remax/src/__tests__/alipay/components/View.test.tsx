import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import View from '../../../adapters/alipay/components/View';

describe('View', () => {
  it('render correctly', () => {
    const callback = () => {};

    const testRenderer = TestRenderer.create(
      <View onAnimationStart={callback} catchClick={callback} className="class">
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
