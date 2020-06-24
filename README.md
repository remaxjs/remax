# Remix 小程序框架

COMING SOON!

## 开发

### 准备

Node.js 版本 12 或以上

```bash
$ brew install yarn
$ npm install @ali/yarn -g --registry=http://registry.npm.alibaba-inc.com
$ ayarn install
```

### 调试

可以使用 `e2e/mini` 调试小程序。

```bash
$ yarn build 或 yarn watch
$ cd e2e/mini
$ yarn dev
```

安装一个不会污染 git history 的 demo 项目

```bash
node scripts/install-samples.js
```

打开`e2e/sample` 调试

```bash
$ yarn build 或 yarn watch
$ cd e2e/sample
$ yarn dev
```

### 测试

```bash
$ yarn build 或 yarn watch
$ yarn test
```
