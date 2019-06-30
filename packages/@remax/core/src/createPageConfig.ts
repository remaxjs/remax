import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import { render } from './';

export default function createPageConfig(Page: React.ComponentType) {
  return {
    data: {
      $$REMAX_ROOT: [],
    },

    wrapper: null as any,

    onLoad(query: any) {
      const PageWrapper = createPageWrapper(Page, query);

      this.wrapper = render(React.createElement(PageWrapper), this);
    },

    onShow() {
      this.wrapper.componentDidShow();
    },
  };
}
