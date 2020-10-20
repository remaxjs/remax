import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { RtcRoomItem } from '../../hostComponents';

describe('RtcRoomItem', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<RtcRoomItem />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
