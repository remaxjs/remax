---
title: 样式
order: 24
---

# 样式

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

Remax 会自动把 `px` 转换成小程序 `rpx`，（如果转换到 web，`px` 则会变成 `rem`，转换比例是 100 : 1）：

```css
.view {
  height: 16px;
}
```

```css
/* 小程序 */
.view {
  height: 16rpx;
}
```

```css
/* web */
.view {
  height: 0.16rem;
}
```

如果你不想转换 `px` ，就写成 `PX`，如：

```css
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

你也可以通过 `remax.config.js` 修改 webpack 配置以采用不同的 CSS Modules 匹配规则，关于 Remax 配置请参考 [指南 - 配置](/guide/config)

### 样式中引用图片

css 中图片引用问题

[遵循 css-loader 的规则](https://github.com/webpack-contrib/css-loader#url)

1. `/path/to/image.png` 绝对路径表示对应输出目录中的 `/path/to` 路径位置，归类为 global assets，需要开发者自己 copy 文件到输出目录中对应的位置。

2. `~@/assets/image.png` `~` 开头表示引入的是 module，可以是 src 下的图片， webpack 可以 resolve。

3. `../../assets/image.png` 相对路径也会被识别为 module，webpack 会处理。

## 小程序自定义组件样式

Remax 使用的是 React 组件特性，因此没有自定义组件的概念，你无须关心小程序自定义组件样式的问题

## 样式补全

Remax 没有对样式做补全，在上传代码时，记得开启小程序 **样式补全** 选项
