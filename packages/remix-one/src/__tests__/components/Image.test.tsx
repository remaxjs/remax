import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Image } from '../../hostComponents';

describe('Image', () => {
  it('render correctly in ali', () => {
    process.env.REMAX_PLATFORM = 'ali';
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

  it('render correctly in wechat', () => {
    process.env.REMAX_PLATFORM = 'wechat';
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

  it('render correctly in toutiao', () => {
    process.env.REMAX_PLATFORM = 'toutiao';
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
