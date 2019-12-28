import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Canvas from '../../hostComponents/Canvas';

describe('Canvas', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Canvas cavasId="id" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
