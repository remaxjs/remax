import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import FunctionalPageNavigator from '../../../adapters/wechat/components/FunctionalPageNavigator';

describe('FunctionalPageNavigator', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<FunctionalPageNavigator />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
