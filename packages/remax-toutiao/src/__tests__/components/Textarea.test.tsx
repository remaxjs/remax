import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Textarea from '../../hostComponents/Textarea';

describe('TextArea', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Textarea className="class" value="" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
