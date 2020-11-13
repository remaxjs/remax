import * as React from 'react';

interface Props {
  errorScreen: React.ComponentType<any>;
}

interface State {
  error: Error | null;
}

export default class ErrorScreen extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    const { error } = this.state;
    const { errorScreen } = this.props;
    if (error) {
      return React.createElement(errorScreen, { error });
    }

    return this.props.children;
  }
}
