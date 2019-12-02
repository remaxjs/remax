---
title: 状态共享
order: 43
---

由于 Remax 把页面组件[统一](/guide/framework)成了 `App` 的子组件渲染，所以你可以很方便的使用 React 的 Context 在页面之间共享状态。

具体的例子可以参考：https://github.com/remaxjs/examples/tree/master/alipay

我们也推荐使用 [unstated](https://github.com/jamiebuilds/unstated)、[constate](https://github.com/diegohaz/constate) 这样的超轻量库。

当然，如果你也可以直接使用 Redux/Dva/Mobx 等社区常用的状态管理方案。
