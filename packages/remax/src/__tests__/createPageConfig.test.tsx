import * as React from 'react';
import { createPageConfig, createAppConfig } from '..';
import { useQuery } from '../hooks';

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
  it('useQuery will get the query from onLoad', () => {
    const useQueryMock = jest.fn(useQuery);
    const pageQuery = { id: 1 };
    const TestPage = () => {
      const query = useQueryMock();
      expect(query).toBe(pageQuery);
      return <div>{query.id}</div>;
    };
    const page = Page(createPageConfig(TestPage));
    page.onLoad(pageQuery);
    expect(useQueryMock).toBeCalled();
    page.onUnload();
  });
});
