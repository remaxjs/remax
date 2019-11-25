import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Video from '../../../adapters/toutiao/components/Video';

describe('Video', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Video src="video-src" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
