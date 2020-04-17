import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ContactButton } from '../../hostComponents';
describe('ContactButton', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(ContactButton, { tntInstId: '', scene: '' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
