import * as React from 'react';

export default function createPageWrapper(Page: React.ComponentType, query: object) {
  return class PageWrapper extends React.Component {
    instance: any = null;

    componentDidShow() {
      if (this.instance && this.instance.componentDidShow) {
        this.instance.componentDidShow();
      }
    }

    render() {
      const props: any = {
        location: {
          query: query || {},
        },
      };
      // function component doesn't have ref
      if (typeof Page !== 'function') {
        props.ref = (node: any) => (this.instance = node);
      }
      return React.createElement(Page, props);
    }
  };
}
