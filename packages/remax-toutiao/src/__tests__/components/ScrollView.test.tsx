import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ScrollView } from '../../hostComponents';

describe('ScrollView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<ScrollView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
