---
title: 样式
order: 24
---

Remax 默认支持 css/less/sass/stylus，安装你需要的样式处理器，即可使用。如：

```bash
  npm install less --save  # less 用户
  npm install node-sass --save  # sass 用户
```

```js
import './index.css';
import './index.less';
import './index.scss';
```

Remax 会自动把 `px` 转换成小程序 `rpx`：

```css
.view {
  height: 16px;
}
```

```css
.view {
  height: 16rpx;
}
```

如果你不想转换 `px` ，就写成 `PX`，如：

```
.view {
  height: 16PX:
}
```

如果整个项目都不想转换 `px` 则可以在配置中将 `pxToRpx` 选项置为 `false`。

Remax 同时也支持 [CSS Modules](https://github.com/css-modules/css-modules)

所有以 `module.css|less` 结尾的文件都将按照 **CSS Modules** 处理。如：

```css
/* index.module.css */

.view {
  display: flex;
}
```

```js
import styles from './index.module.css';

export default function() {
  return <View className={styles.view}> view </View>;
}
```

你也可以通过 `remax.config.js` 配置不同的 CSS Modules 匹配规则，关于 Remax 配置请参考 [指南 - 配置](/guide/config)

## 小程序自定义组件样式

Remax 使用的是 React 组件特性，因此没有自定义组件的概念，你无须关心小程序自定义组件样式的问题

## 样式补全

Remax 没有对样式做补全，在上传代码时，记得开启小程序 **样式补全** 选项
