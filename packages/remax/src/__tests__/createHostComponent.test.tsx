import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createHostComponent from '../createHostComponent';

describe('createHostComponent', () => {
  it('create correctly', () => {
    const RemaxCustomComponent = createHostComponent<{ foo: string }>(
      'custom-component'
    );
    const testRenderer = TestRenderer.create(
      <RemaxCustomComponent foo="bar" />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('create with custom render', () => {
    const RemaxCustomComponent = createHostComponent<{ foo: string }>(
      'custom-component',
      props => React.createElement('input', props)
    );
    const testRenderer = TestRenderer.create(
      <RemaxCustomComponent foo="bar" />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
