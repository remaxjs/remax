import { render } from 'react-dom';
import hd from 'umi-hd';
import { createHashHistory, createBrowserHistory } from 'history';
import { RuntimeOptions } from '@remax/framework-shared';
import createApp from './createApp';
import { BootstrapOptions } from './types';

export default function bootstrap(options: BootstrapOptions) {
  hd();
  const { appConfig } = options;
  const history =
    !appConfig.router || appConfig.router.type !== 'browser' ? createHashHistory() : createBrowserHistory();

  RuntimeOptions.apply({ history, mpa: false });
  render(createApp(options, history), document.getElementById('remax-app'));
}
