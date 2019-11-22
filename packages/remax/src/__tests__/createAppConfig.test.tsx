import * as React from 'react';
import createAppConfig from '../createAppConfig';

describe('createAppConfig', () => {
  class App extends React.Component {
    render() {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }
  }

  it('get App ref', () => {
    const appConfig = createAppConfig(App);
    appConfig.onLaunch();
    expect(appConfig._instance.current).toBeInstanceOf(App);
  });

  it('get App ref with HOC', () => {
    const hoc = (AppComponent: React.ComponentType<any>) => {
      return React.forwardRef((_, ref) => {
        return <AppComponent ref={ref} />;
      });
    };
    const appConfig = createAppConfig(hoc(App));
    appConfig.onLaunch();
    expect(appConfig._instance.current).toBeInstanceOf(App);
  });
});
