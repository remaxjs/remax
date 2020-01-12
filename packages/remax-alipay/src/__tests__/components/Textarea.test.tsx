import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Textarea } from '../../hostComponents';

describe('Textarea', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Textarea className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
