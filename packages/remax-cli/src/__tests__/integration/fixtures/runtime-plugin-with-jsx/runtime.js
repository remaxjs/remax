import * as React from 'react';
import { View } from 'remax';

export default {
  onPageComponent({ component, page }) {
    const AppLayout = props => <View id="app-layout">{props.children}</View>;
    // 注意这里一定要用 React.forwardRef 把 ref 传下去
    return React.forwardRef((props, ref) => {
      return React.createElement(AppLayout, null, React.createElement(component, { ...props, ref }));
    });
  },
};
