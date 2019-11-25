class App {
  config: any;

  constructor(config: any) {
    this.config = config;
  }

  launch() {
    this.config.onLaunch();
  }

  show() {
    this.config.onShow();
  }

  hide() {
    this.config.onHide();
  }

  error() {
    this.config.onError('error');
  }

  shareAppMessage() {
    this.config.onShareAppMessage({
      from: 'menu',
      target: undefined,
      webViewUrl: 'https://www.alipay.com',
    });
  }
}

export default function AppConstructor(config: any) {
  const app = new App(config);
  return app;
}
