import './app.css';
import * as React from 'react';

export default class App extends React.Component {
  onShareAppMessage() {
    console.log('on share app message');
  }

  onHide() {
    console.log('on hide');
  }

  render() {
    return this.props.children;
  }
}
