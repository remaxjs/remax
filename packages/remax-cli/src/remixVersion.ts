export default function remixVersion() {
  return require('@alipay/remax/package.json').version;
}

export function reactVersion() {
  return require('react/package.json').version;
}

export function reactReconcilerPeerReactVersion() {
  return require('react-reconciler/package.json').peerDependencies.react;
}
