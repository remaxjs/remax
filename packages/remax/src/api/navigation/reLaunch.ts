interface Params {
  // 页面路径。如果页面不为 tabbar 页面则路径后可以带参数。
  url: string;
  // 调用成功的回调函数。
  success?: () => void;
  // 调用失败的回调函数。
  fail?: () => void;
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

export function reLaunch(params: Params) {
  return Promise.resolve();
}
