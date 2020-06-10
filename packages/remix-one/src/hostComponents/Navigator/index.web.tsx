import * as React from 'react';
import clsx from 'clsx';
import { history } from '@alipay/remix-router/web';
import { NavigatorProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export type { NavigatorProps };

const Navigator: React.FC<NavigatorProps> = props => {
  const { className, url, action, hoverClassName, hoverStartTime, hoverStayTime, ...restProps } = filterProps(props);

  function handleTap() {
    switch (action) {
      case 'reLaunch':
        window.location.href = window.location.hostname + url;
        break;
      case 'redirect':
        history.replace(url);
        break;
      case 'navigate':
      case 'switchTab':
      default:
        history.push(url);
        break;
    }
  }

  return <div {...restProps} className={clsx(className)} onClick={handleTap} />;
};
export default Navigator;
