import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Canvas from '../../../adapters/toutiao/components/Canvas';

describe('Canvas', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Canvas cavasId="id" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
