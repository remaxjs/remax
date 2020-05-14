import './app.css';
import * as React from 'react';

export default class App extends React.Component {
  onShow() {
    console.log('on show');
  }

  onHide() {
    console.log('on hide');
  }

  render() {
    return this.props.children;
  }
}
