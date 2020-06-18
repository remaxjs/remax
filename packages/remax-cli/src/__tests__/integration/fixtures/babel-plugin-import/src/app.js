import * as React from 'react';
import { useRefState } from 'parsec-hooks';

export default class App extends React.Component {
  render() {
    console.log(useRefState);
    return this.props.children;
  }
}
