import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import RichText from '../../../adapters/toutiao/components/RichText';

describe('RichText', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<RichText />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
