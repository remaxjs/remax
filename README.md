<h1 align="center">
  Remax
</h1>

<p align="center">
  使用真正的 React 构建小程序。
</p>

<p align="center">
  <a href="https://travis-ci.org/remaxjs/remax">
    <img src="https://img.shields.io/travis/remaxjs/remax.svg?style=flat-square" alt="Travis CI build status" />
  </a>
  <a href="https://remaxjs-slack-invite.herokuapp.com">
    <img src="https://img.shields.io/badge/chat-on%20slack-brightgreen?style=flat-square&logo=slack" alt="Chat on Slack" />
  </a>
</p>

**开发中，请勿用于生产环境**

Remax 将完整的 React 运行在小程序环境中，让你可以使用完整的 React 能力去开发小程序。

```javascript
import * as React from 'react';
import { View, Text, Button } from 'remax';

export default () => {
  const [count, setCount] = React.useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </View>
  );
};
```

查看完整的 Demo 示例 [https://github.com/remaxjs/todo-demo](https://github.com/remaxjs/todo-demo)

## Roadmap

- 🚧 支付宝小程序
- 🚧 微信小程序
- 🤔 [支付宝小程序组件库](https://github.com/ant-mini-program/mini-antui)
- 🤔 集成 [umi](https://github.com/umijs/umi)，可以编译到 Web
- 🤔 React Developer Tools
- 🤔 [WeUI](https://github.com/Tencent/weui)
- 🤔 其他小程序

## License

[MIT](LICENSE)
