import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import render from './render';
import { REMAX_ROOT_BACKUP, REMAX_ROOT } from './constants';
import pure from './utils/pure';
import debounce from './utils/debounce';

export default function createPageConfig(Page: React.ComponentType<any>) {
  return {
    data: {
      $$REMAX_ROOT: [],
    },

    wrapper: null as any,

    onLoad(this: any, query: any) {
      this.requestUpdate = debounce(() => {
        const data = pure(this[REMAX_ROOT_BACKUP]);

        const startTime = new Date().getTime();

        this.setData(
          {
            [REMAX_ROOT]: data,
          },
          () => {
            if (process.env.NODE_ENV !== 'production') {
              console.log(
                `setData => 回调时间：${new Date().getTime() - startTime}ms`
              );
            }
          }
        );
      }, 1000 / 60);

      const PageWrapper = createPageWrapper(Page, query);

      this.wrapper = render(React.createElement(PageWrapper), this);
    },

    onUnload(this: any) {
      if (this.requestUpdate) {
        this.requestUpdate.clear();
      }
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
      return this.wrapper.onShareAppMessage();
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
