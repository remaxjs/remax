import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Label from '../../../adapters/wechat/components/Label';

describe('Label', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Label />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
