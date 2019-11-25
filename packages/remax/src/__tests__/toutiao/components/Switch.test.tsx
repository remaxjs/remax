import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Switch from '../../../adapters/toutiao/components/Switch';

describe('Switch', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Switch />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
