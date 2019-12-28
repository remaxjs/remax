import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Map from '../../hostComponents/Map';

describe('Map', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Map latitude={0} longitude={0} />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
