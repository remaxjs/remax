import * as React from 'react';
import createAppConfig from '../createAppConfig';
import { CONFIG_SCOPE as SCOPE } from '../constants';

describe('createAppConfig', () => {
  class App extends React.Component {
    render() {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }
  }

  it('get App ref', () => {
    const appConfig = createAppConfig(App);
    appConfig.onLaunch();
    expect(appConfig[SCOPE]._instance.current).toBeInstanceOf(App);
  });

  it('get App ref with HOC', () => {
    const hoc = (AppComponent: React.ComponentType<any>) => {
      return React.forwardRef((_, ref) => {
        return <AppComponent ref={ref} />;
      });
    };
    const appConfig = createAppConfig(hoc(App));
    appConfig.onLaunch();
    expect(appConfig[SCOPE]._instance.current).toBeInstanceOf(App);
  });

  it('does not pass ref to FC', () => {
    const FCApp: React.FC = props => props.children as React.ReactElement;
    const appConfig = createAppConfig(FCApp);
    appConfig.onLaunch();
    expect(appConfig[SCOPE]._instance.current).toBeNull();
  });

  it('backwards compatible, App as an es6 class', () => {
    function _classCallCheck(instance: any, Constructor: any) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }

    const App = (function() {
      function App(this: any) {
        _classCallCheck(this, App);
      }

      App.prototype.foo = 'bar';
      return App;
    })();

    const appConfig = createAppConfig(App);
    expect(appConfig.foo).toBe('bar');
  });

  it('App as an plain object', () => {
    const onShow = jest.fn();
    const App = {
      foo: 'bar',
      onShow,
    };

    const appConfig = createAppConfig(App);
    appConfig.onShow();

    expect(appConfig.foo).toBe('bar');
    expect(onShow).toBeCalled();
  });

  it('use default App', () => {
    expect(createAppConfig(undefined)).toBeDefined();
  });
});
