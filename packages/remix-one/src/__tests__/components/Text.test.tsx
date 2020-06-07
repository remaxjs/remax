import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from '../../hostComponents';

describe('Text', () => {
  it('render correctly in ali', () => {
    process.env.REMAX_PLATFORM = 'ali';
    const testRenderer = TestRenderer.create(<Text className="class">text</Text>);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in wechat', () => {
    process.env.REMAX_PLATFORM = 'wechat';
    const testRenderer = TestRenderer.create(<Text className="class">text</Text>);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in toutiao', () => {
    process.env.REMAX_PLATFORM = 'toutiao';
    const testRenderer = TestRenderer.create(<Text className="class">text</Text>);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in web', () => {
    process.env.REMAX_PLATFORM = 'web';
    const testRenderer = TestRenderer.create(<Text className="class">text</Text>);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
