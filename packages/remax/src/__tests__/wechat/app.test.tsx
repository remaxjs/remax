import * as React from 'react';
import './helpers/setupGlobals';
import App from './helpers/App';
import createAppConfig from '../../createAppConfig';

describe('app', () => {
  it('lifecycle methods', () => {
    const log: string[] = [];
    class Foo extends React.Component {
      onLaunch() {
        log.push('onLaunch');
      }

      onShow() {
        log.push('onShow');
      }

      onHide() {
        log.push('onHide');
      }

      onError(error: any) {
        log.push(error);
        log.push('onError');
      }

      onPageNotFound(object: any) {
        log.push(object.path);
        log.push('onPageNotFound');
      }

      render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
      }
    }

    const app = App(createAppConfig(Foo));
    app.launch();
    app.show();
    app.pageNotFound();
    app.error();
    app.hide();

    expect(log).toEqual([
      'onLaunch',
      'onShow',
      'path',
      'onPageNotFound',
      'error',
      'onError',
      'onHide',
    ]);
  });
});
