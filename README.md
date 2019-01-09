# remax

## 开发中

## Remax

让你在小程序开发中使用**真正的 React**，完整的 JSX 甚至是最新的 `Hooks API`。而不是使用受到各种限制的 JSX（其实是模板）翻译成小程序模板。

当前还在开发中，暂时无法用于生产环境。

## 快速开始

```shell
git clone https://github.com/CodeFalling/remax
cd remax/packages/remax

# 安装 yarn
npm install -g yarn

# 国内用户推荐使用 yrm 切换源
# npm install -g yrm
# yrm use taobao

npm run bootstrap
# 启动 demo
npm run dev:demo
```

登录微信开发者工具，新建项目，选择 `remax/pacakges/@remax/demo` 目录，就能看到 DEMO 小程序

![miniapp](https://s2.ax1x.com/2019/01/08/FLnWRg.md.gif)

DEMO 代码见：`packages/remax/demo/src/pages/index.js` 

```js
import React from 'react';
import {
  useState,
} from 'react';

import Remax from '@remax/core';
import {
  View,
  Image,
  Button,
} from '@remax/components';

import styles from './index.less';

const ClickComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 222);
  };

  return (
    <View onClick={handleClick}>
      <Image className={styles.image} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
    CLICK the image
      {count}
    times
    </View>
  );
};


const Component = () => {
  const [
    loading,
    setLoading,
  ] = useState(false);

  const showToast = () => {
    setLoading(!loading);
    Remax.api.showToast({
      title: 'ok',
      icon: 'succes',
      duration: 1000,
      mask: true,
    });
  };

  return (
    <View>

      <View className={styles.title}>
        {'<ClickComponent />'}
with useState
      </View>
      <ClickComponent />
      <Button loading={loading} className={styles.btn} type="primary" onClick={showToast}>
      点击
      </Button>

    </View>
  );
};


Remax.render(<Component />);

```

`index.less` ：

```less
@-webkit-keyframes rotation {
    from {-webkit-transform: rotate(0deg);
}to {
    -webkit-transform: rotate(360deg);
}}

.image {
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: auto;
    -webkit-transform: rotate(360deg);
    animation: rotation 8s linear infinite;
    border-radius: 200px;
    width: 150px;
}

.title {
    font-size: 24px;
    text-align: center;
}

.btn {
    width: 80%;
    display: block;
    margin: auto;
}

```

我们可以无障碍的使用 CSS Modules, React Hooks 等特性