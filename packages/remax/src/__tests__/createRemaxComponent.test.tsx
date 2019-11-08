import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createHostComponent from '../createHostComponent';

describe('createHostComponent', () => {
  it('create remax component', () => {
    const RemaxCustomComponent = createHostComponent<{ foo: string }>(
      'custom-component'
    );
    const testRenderer = TestRenderer.create(
      <RemaxCustomComponent foo="bar" />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
