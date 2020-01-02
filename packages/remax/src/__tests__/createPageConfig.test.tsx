import * as React from 'react';
import { createPageConfig, createAppConfig } from '..';
import { usePageQuery } from '../hooks';

// mock mini program getApp api
const app = createAppConfig(undefined);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
global.getApp = () => app;

function Page<T>(config: T) {
  return Object.assign(config, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setData() {},
  });
}

describe('page query hook', () => {
  it('usePageQuery will get the query from onLoad', () => {
    const fn = jest.fn();
    const pageQuery = { id: 1 };
    const TestPage = () => {
      const query = usePageQuery<typeof pageQuery>();
      fn();
      expect(query).toBe(pageQuery);
      return <div>{query.id}</div>;
    };
    const page = Page(createPageConfig(TestPage));
    page.onLoad(pageQuery);
    expect(fn).toBeCalled();
    page.onUnload();
  });
});
