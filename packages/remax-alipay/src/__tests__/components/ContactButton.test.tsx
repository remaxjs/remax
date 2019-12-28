import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ContactButton } from '../../hostComponents';

describe('ContactButton', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <ContactButton tntInstId="" scene="" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
