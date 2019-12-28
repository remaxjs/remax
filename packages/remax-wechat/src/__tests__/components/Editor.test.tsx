import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Editor from '../../hostComponents/Editor';

describe('Editor', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Editor />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
