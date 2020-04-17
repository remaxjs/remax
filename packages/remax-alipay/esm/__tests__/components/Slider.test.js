import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Slider } from '../../hostComponents';
describe('Slider', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(Slider, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
