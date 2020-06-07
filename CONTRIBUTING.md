# 贡献指南

这篇指南会指导你如何为 Remix 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。

## 参与者公约

我们有一份社区的[《参与者公约》](/CONTRIBUTING.md)，希望所有的参与者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。

## 透明的开发

我们所有的工作都会放在 GitHub 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要经过同样流程的 review。

## 分支管理

目前我们所有的开发都在 `master` 分支上进行，我们会尽力保证 `master` 上的代码稳定。所有在 `master` 上提交的代码必须是向下兼容的，可以新增功能，但不允许有破坏性的修改。

## Bugs

我们使用 [GitHub Issues](https://code.alipay.com/remix/remix/issues) 来管理 bug。 如果你想要你发现的 bug 被快速解决，最好的办法就是给我们提一个带有可重现仓库的 issue。

所有的 bug 会有 [bug 标记](https://code.alipay.com/remix/remix/issues?q=is%3Aissue+is%3Aopen+label%3Abug)，如果你想找一个容易上手的 bug 来修复，可以查看标记为 [good first issue](https://code.alipay.com/remix/remix/issues?q=is%3Aissue+is%3Aclosed+label%3A%22good+first+issue%22) 的 issue。

在你报告一个 bug 之前，请先确保已经搜索过已有的 issues。

## 开发

在开始之前推荐你先了解一下[《Remix 实现原理》](https://remixjs.org/advanced-guide/implementation-notes)

### 构建项目

> 推荐用 yarn

```bash
$ git clone git@github.com:remixjs/remix.git
$ cd remix
$ yarn
$ yarn watch
```

### 调试开发包

```bash
$ cd path/to/remix/packages/remix
$ yarn link
$ cd path/to/remix/packages/@alipay/remix-cli
$ yarn link
$ git clone git@github.com:remixjs/examples.git remix-examples
$ cd remix-examples/ali # 找一个你要调试的例子
$ yarn link remix @alipay/remix-cli
$ yarn dev
```

然后用对应小程序的 IDE 打开 `dist` 目录就可以调试了。

### 运行测试

```javascript
$ yarn test
```
