import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { View } from '../../hostComponents';

describe('View', () => {
  it('render correctly in ali', () => {
    process.env.REMAX_PLATFORM = 'ali';
    const testRenderer = TestRenderer.create(
      <View
        className="class"
        onTap={() => {
          // ignore
        }}
        onLongTap={() => {
          // ignore
        }}
        onTouchStart={() => {
          // ignore
        }}
        onTouchMove={() => {
          // ignore
        }}
        onTouchEnd={() => {
          // ignore
        }}
        onTouchCancel={() => {
          // ignore
        }}
      >
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in wechat', () => {
    process.env.REMAX_PLATFORM = 'wechat';
    const testRenderer = TestRenderer.create(
      <View
        className="class"
        onTap={() => {
          // ignore
        }}
        onLongTap={() => {
          // ignore
        }}
        onTouchStart={() => {
          // ignore
        }}
        onTouchMove={() => {
          // ignore
        }}
        onTouchEnd={() => {
          // ignore
        }}
        onTouchCancel={() => {
          // ignore
        }}
      >
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in toutiao', () => {
    process.env.REMAX_PLATFORM = 'toutiao';
    const testRenderer = TestRenderer.create(
      <View
        className="class"
        onTap={() => {
          // ignore
        }}
        onLongTap={() => {
          // ignore
        }}
        onTouchStart={() => {
          // ignore
        }}
        onTouchMove={() => {
          // ignore
        }}
        onTouchEnd={() => {
          // ignore
        }}
        onTouchCancel={() => {
          // ignore
        }}
      >
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in web', () => {
    process.env.REMAX_PLATFORM = 'web';
    const testRenderer = TestRenderer.create(
      <View
        className="class"
        onTap={() => {
          // ignore
        }}
        onLongTap={() => {
          // ignore
        }}
        onTouchStart={() => {
          // ignore
        }}
        onTouchMove={() => {
          // ignore
        }}
        onTouchEnd={() => {
          // ignore
        }}
        onTouchCancel={() => {
          // ignore
        }}
      >
        view
      </View>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
