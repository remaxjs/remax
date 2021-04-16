import * as React from 'react';
import { createMemoryHistory as createHistory } from 'history';
import renderer from 'react-test-renderer';
import createApp from '../createApp';

const App: React.FC = props => props.children as React.ReactElement;
const createPage = (text: string) => () => <div>{text}</div>;
const initHistory = (path: string) =>
  createHistory({
    initialEntries: [path],
  });

describe('createApp', () => {
  it('renders app correctly', () => {
    const app = renderer.create(
      createApp(
        {
          async: false,
          appComponent: App,
          appConfig: {
            pages: ['pages/foo'],
          },
          pageComponents: [() => createPage('foo'), () => createPage('bar')],
          pages: [
            {
              route: 'pages/foo',
              config: {},
            },
            {
              route: 'pages/bar',
              config: {},
            },
          ],
        },
        initHistory('/pages/foo')
      )
    );
    expect(app.toJSON()).toMatchSnapshot();
  });

  describe('defaultTitle', () => {
    it('sets document title based on app config', () => {
      renderer.create(
        createApp(
          {
            async: false,
            appComponent: App,
            appConfig: {
              pages: ['pages/index'],
              window: {
                defaultTitle: 'remax',
              },
            },
            pageComponents: [() => createPage('index')],
            pages: [
              {
                route: 'pages/index',
                config: {},
              },
            ],
          },
          initHistory('/pages/index')
        )
      );
      expect(document.title).toBe('remax');
    });

    it('sets document title based on page config', () => {
      renderer.create(
        createApp(
          {
            async: false,
            appComponent: App,
            appConfig: {
              pages: ['pages/index'],
              window: {
                defaultTitle: 'remax',
              },
            },
            pageComponents: [() => createPage('index')],
            pages: [
              {
                route: 'pages/index',
                config: {
                  defaultTitle: 'index',
                },
              },
            ],
          },
          initHistory('/pages/index')
        )
      );
      expect(document.title).toBe('index');
    });

    describe('tabBar', () => {
      it('renders tabBar correctly', () => {
        const app = renderer.create(
          createApp(
            {
              async: false,
              appComponent: App,
              appConfig: {
                pages: ['pages/foo'],
                tabBar: {
                  textColor: 'red',
                  selectedColor: 'blue',
                  backgroundColor: 'white',
                  items: [
                    {
                      title: 'foo',
                      url: 'pages/foo',
                      image: '/assets/foo.png',
                    },
                    {
                      title: 'bar',
                      url: 'pages/bar',
                      image: '/assets/bar.png',
                    },
                  ],
                },
              },
              pageComponents: [() => createPage('foo'), () => createPage('bar')],
              pages: [
                {
                  route: 'pages/foo',
                  config: {},
                },
                {
                  route: 'pages/bar',
                  config: {},
                },
              ],
            },
            initHistory('/pages/foo')
          )
        );
        expect(app.toJSON()).toMatchSnapshot();
      });
    });

    describe('pullRefresh', () => {
      it('renders pullRefresh', () => {
        const app = renderer.create(
          createApp(
            {
              async: false,
              appComponent: App,
              appConfig: {
                pages: ['pages/index'],
              },
              pageComponents: [() => createPage('index')],
              pages: [
                {
                  route: 'pages/index',
                  config: {
                    pullRefresh: true,
                  },
                },
              ],
            },
            initHistory('/pages/index')
          )
        );
        expect(app.toJSON()).toMatchSnapshot();
      });
    });
  });
});
