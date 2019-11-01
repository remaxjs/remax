import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ContactButton from '../../../adapters/alipay/components/ContactButton';

describe('ContactButton', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <ContactButton tntInstId="" scene="" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
