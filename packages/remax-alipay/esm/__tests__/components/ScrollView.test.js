import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ScrollView } from '../../hostComponents';
describe('ScrollView', function() {
  it('render correctly', function() {
    var testRenderer = TestRenderer.create(React.createElement(ScrollView, null));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
