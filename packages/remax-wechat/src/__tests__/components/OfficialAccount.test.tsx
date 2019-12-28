import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import OfficialAccount from '../../hostComponents/OfficialAccount';

describe('OfficialAccount', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<OfficialAccount />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
