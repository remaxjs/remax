import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Picker } from '../../hostComponents';

describe('Picker', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Picker mode="selector" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
