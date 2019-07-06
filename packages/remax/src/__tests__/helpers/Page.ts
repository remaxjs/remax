import setDataImmutable from './setDataImmutable';

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
    this.config.onShareAppMessage();
  }

  titleClick() {
    this.config.onTitleClick();
  }

  optionMenuClick() {
    this.config.onOptionMenuClick();
  }

  popMenuClick() {
    this.config.onPopMenuClick();
  }

  pullIntercept() {
    this.config.onPullIntercept();
  }
}

export default function PageConstructor(config: any) {
  return new Page(config);
}
