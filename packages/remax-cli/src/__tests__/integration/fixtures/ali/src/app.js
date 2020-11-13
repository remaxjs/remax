import './app.css';
import * as React from 'react';
import image from '@/assets/images/cat.png';

export default class App extends React.Component {
  // 引入一张图片，测试当 app 文件不是第一个 entry 时的
  // case https://code.alipay.com/remax/remax/pull/666
  image = image;

  onHide() {
    console.log('on hide');
  }

  render() {
    return this.props.children;
  }
}
