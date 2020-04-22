---
title: 使用 Css In Js
order: 25
---

在 Remax 中可以使用 [linaria](https://github.com/callstack/linaria) 作为 `css in js` 的解决方案。

## 使用方式

安装

```bash
$ yarn add linaria
```

在项目根目录添加 `linaria.config.js`

```js
module.exports = {
  babelOptions: {
    presets: [['remax', { react: false }]],
  },
};
```

修改 `remax.config.js`

```js
module.exports = {
  configWebpack: config => {
    config.module
      .rule('linaria')
      .test(/\.(j|t)s(x)?$/)
      .use('linaria')
      .loader('linaria/loader')
      .end();
  },
};
```

在项目中使用:

```jsx
import * as React from 'react';
import { Button } from 'remax/one';
import { styled } from 'linaria/react';

const StyledButton = styled(Button)`
  background: ${props => (props.primary ? 'tomato' : 'black')};
  display: inline-block;
  border: none;
  width: auto;
  height: auto;
`;

const LoginButton = ({ login, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default LoginButton;
```

更多用法及文档请查看 [https://github.com/callstack/linaria](linaria)。

### 微信平台使用注意

受限于微信平台的限制，在使用诸如此类的动态特性时，需要指明组件用到的属性：

```jsx
import * as React from 'react';
import { Button } from 'remax/one';
import { styled } from 'linaria/react';

function WechatButton({ style, onTap, className, children }) {
  // linaria 会动态设置 style, className 属性，因此这里要写明。其他你在项目中用到的属性都需要写明
  return (
    <Button style={style} className={className} onTap={onTap}>
      {children}
    </Button>
  );
}

const StyledButton = styled(WechatButton)`
  background: ${props => (props.primary ? 'tomato' : 'black')};
  display: inline-block;
  border: none;
  width: auto;
  height: auto;
`;

const LoginButton = ({ login, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default LoginButton;
```
