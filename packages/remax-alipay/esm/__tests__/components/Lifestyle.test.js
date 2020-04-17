import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Lifestyle } from '../../hostComponents';
describe('Lifestyle', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Lifestyle, { publicId: '' }));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
