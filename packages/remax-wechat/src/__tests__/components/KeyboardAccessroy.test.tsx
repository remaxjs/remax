import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { KeyboardAccessory } from '../../hostComponents';

describe('KeyboardAccessory', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<KeyboardAccessory />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
