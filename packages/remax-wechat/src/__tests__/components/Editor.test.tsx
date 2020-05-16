import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Editor } from '../../hostComponents';

describe('Editor', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Editor />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
