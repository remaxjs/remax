import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageMeta } from '../../hostComponents';

describe('PageMeta', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<PageMeta />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
