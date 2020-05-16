import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Radio } from '../../hostComponents';

describe('Radio', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Radio />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
