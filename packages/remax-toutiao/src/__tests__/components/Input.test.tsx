import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Input } from '../../hostComponents';

describe('Input', () => {
  it('render correctly', () => {
    const tree = TestRenderer.create(<Input value="" type="text" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
