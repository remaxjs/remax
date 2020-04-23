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
    appConfig.onLaunch({});
    expect(appConfig._instance.current).toBeInstanceOf(App);
  });

  it('get App ref with HOC', () => {
    const hoc = (AppComponent: React.ComponentType<any>) => {
      return React.forwardRef((_, ref) => {
        return <AppComponent ref={ref} />;
      });
    };
    const appConfig = createAppConfig(hoc(App));
    appConfig.onLaunch({});
    expect(appConfig._instance.current).toBeInstanceOf(App);
  });

  it('does not pass ref to FC', () => {
    const FCApp: React.FC = props => props.children as React.ReactElement;
    const appConfig = createAppConfig(FCApp);
    appConfig.onLaunch({});
    expect(appConfig._instance.current).toBeNull();
  });

  it('use default App', () => {
    expect(createAppConfig(undefined)).toBeDefined();
  });
});
