import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { AdCustom } from '../../hostComponents';

describe('AdCustom', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<AdCustom unitId="id" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
