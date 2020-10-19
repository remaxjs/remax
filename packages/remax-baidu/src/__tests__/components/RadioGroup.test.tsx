import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { RadioGroup } from '../../hostComponents';

describe('RadioGroup', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<RadioGroup />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
