import { render } from 'react-dom';
import hd from 'umi-hd';
import { createHashHistory } from 'history';
import { RuntimeOptions } from '@remax/framework-shared';
import createApp from './createApp';
import { BootstrapOptions } from './types';
import '../assets/normalize.css';
import '../assets/app.css';

export default function bootstrap(options: BootstrapOptions) {
  hd();
  const history = createHashHistory();
  RuntimeOptions.apply({ history, mpa: false });
  render(createApp(options, history), document.getElementById('remax-app'));
}
