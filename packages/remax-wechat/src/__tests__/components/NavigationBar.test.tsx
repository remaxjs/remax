import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { NavigationBar } from '../../hostComponents';

describe('NavigationBar', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<NavigationBar />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
