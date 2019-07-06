import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import render from './render';

export default function createPageConfig(Page: React.ComponentType<any>) {
  return {
    data: {
      $$REMAX_ROOT: [],
    },

    wrapper: null as any,

    onLoad(query: any) {
      const PageWrapper = createPageWrapper(Page, query);

      this.wrapper = render(React.createElement(PageWrapper), this);
    },

    onUnload() {
      render(null, this);
      this.wrapper = null;
    },

    onShow() {
      this.wrapper.onShow();
    },

    onHide() {
      this.wrapper.onHide();
    },

    onPullDownRefresh() {
      this.wrapper.onPullDownRefresh();
    },

    onReachBottom() {
      this.wrapper.onReachBottom();
    },

    onPageScroll() {
      this.wrapper.onPageScroll();
    },

    onShareAppMessage() {
      this.wrapper.onShareAppMessage();
    },

    onTitleClick() {
      this.wrapper.onTitleClick();
    },

    onOptionMenuClick() {
      this.wrapper.onOptionMenuClick();
    },

    onPopMenuClick() {
      this.wrapper.onPopMenuClick();
    },

    onPullIntercept() {
      this.wrapper.onPullIntercept();
    },
  };
}
