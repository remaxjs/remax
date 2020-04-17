import * as React from 'react';
import { createPageConfig, createAppConfig } from '..';
import { useQuery } from '../hooks';
import { resetPageId } from '../createPageConfig';

beforeAll(() => {
  // mock mini program getApp api
  const app = createAppConfig(undefined);
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  global.getApp = () => app;
});

afterAll(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  global.getApp = undefined;
});

function Page<T>(config: T) {
  return Object.assign(config, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setData() {},
  });
}

describe('page query hook', () => {
  afterEach(() => {
    resetPageId();
  });

  it('useQuery will get the query from onLoad', () => {
    const pageQuery = { id: 1 };
    let receivedQuery: any;
    const TestPage = () => {
      const query = useQuery();
      receivedQuery = query;
      return <div>{query.id}</div>;
    };
    const page = Page(createPageConfig(TestPage, ''));
    page.onLoad(pageQuery);
    expect(receivedQuery).toBe(pageQuery);
    expect(receivedQuery.id).toBe(1);
    page.onUnload();
  });

  it('create page id for each page instance', () => {
    const TestPage = () => {
      return <div>hello</div>;
    };
    const page1 = Page(createPageConfig(TestPage));
    const page2 = Page(createPageConfig(TestPage));
    page1.onLoad({});
    page2.onLoad({});
    expect((page1 as any).pageId).toBe('page_0');
    expect((page2 as any).pageId).toBe('page_1');
  });
});
