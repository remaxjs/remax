import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Form from '../../hostComponents/Form';

describe('Form', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Form reportSubmit={true} />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
