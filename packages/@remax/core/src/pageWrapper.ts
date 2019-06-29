import * as React from 'react';

export default (element: React.ReactElement, query: any) => {
  class PageWrapper extends React.Component {
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
      if (typeof element.type !== 'function') {
        props.ref = (node: any) => (this.instance = node);
      }
      return React.cloneElement(element, props);
    }
  }

  return PageWrapper;
};
