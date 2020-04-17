import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { WebView } from '../../hostComponents';
describe('WebView', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(WebView, { src: 'https://url.com' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
