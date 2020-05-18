import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MovableView } from '../../hostComponents';

describe('MovableView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<MovableView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
