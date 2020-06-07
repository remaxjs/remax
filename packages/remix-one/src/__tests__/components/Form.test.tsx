import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Form } from '../../hostComponents';

describe('Form', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Form
        onSubmit={() => {
          // ignore
        }}
        onReset={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
