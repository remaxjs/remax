import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Image } from '../../hostComponents';

describe('Image', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Image
        className="class"
        onError={() => {
          // ignore
        }}
        onLoad={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
