import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MatchMedia } from '../../hostComponents';

describe('MatchMedia', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<MatchMedia />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
