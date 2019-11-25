import setDataImmutable from '../../helpers/setDataImmutable';
import pages from './pages';

class Page {
  config: any;

  constructor(config: any) {
    this.config = {
      setData: this.setData.bind(this),
      data: {},
      ...config,
    };
  }

  setData(data: any) {
    this.config.data = setDataImmutable(this.config.data, data);
  }

  ready() {
    this.config.onReady();
  }

  load() {
    this.config.onLoad({});
    this.show();
  }

  unload() {
    this.config.onUnload();
  }

  show() {
    this.config.onShow();
  }

  hide() {
    this.config.onHide();
  }

  pullDownRefresh() {
    this.config.onPullDownRefresh();
  }

  reachBottom() {
    this.config.onReachBottom();
  }

  pageScroll() {
    this.config.onPageScroll();
  }

  shareAppMessage() {
    this.config.onShareAppMessage({
      from: 'menu',
    });
  }
}

export default function PageConstructor(config: any) {
  const page = new Page(config);
  pages.push(page.config);
  return page;
}
