import * as React from 'react';
import { render } from 'react-dom';
import hd from 'umi-hd';
import createAppConfig from './createAppConfig';
import { PluginDriver, RuntimeOptions } from '@remax/framework-shared';
import createPageConfig from './createPageConfig';

const noop = () => {
  // ignore
};

function createApp(options: any) {
  const { appComponent, pageComponent, page, appConfig } = options;
  const AppConfig = createAppConfig(appComponent);
  const PageConfig = createPageConfig(pageComponent, page.route);

  return (
    <AppConfig>
      <PageConfig
        pageConfig={{
          ...appConfig.window,
          ...page.config,
        }}
        tabBar={appConfig.tabBar}
        location={window.location}
        cacheLifecycles={{
          didCache: noop,
          didRecover: noop,
        }}
      />
    </AppConfig>
  );
}

export default function bootstrap(options: any) {
  hd();
  const { plugins = [], page } = options;
  const pluginDriver = new PluginDriver(plugins.map((plugin: { default: any }) => plugin.default || plugin));

  const history = {
    push(url: string) {
      url = history.transformUrl(url);
      console.log('not implemented');
    },
    go() {
      console.log('not implemented');
    },
    replace(url: string) {
      url = history.transformUrl(url);
      location.replace(url);
    },
    page: null,
    transformUrl(url: string) {
      if (!url) return url;
      let publicPath = '';
      if (url.startsWith('/')) publicPath = location.pathname.replace(`/${page.route}.html`, '');

      const arr = url.split('?');
      arr[0] = arr[0] + '.html';
      return publicPath + arr.join('?');
    },
  };

  RuntimeOptions.apply({ pluginDriver, history, mpa: true });
  const App = createApp(options);

  render(App, document.getElementById('remax-app'));
}
