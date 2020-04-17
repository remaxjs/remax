import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { CoverImage } from '../../hostComponents';
describe('CoverImage', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(CoverImage, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
