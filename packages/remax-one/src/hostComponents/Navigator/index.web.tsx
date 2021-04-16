import * as React from 'react';
import clsx from 'clsx';
import { RuntimeOptions } from '@remax/framework-shared';
import { NavigatorProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export type { NavigatorProps };

const Navigator: React.ForwardRefRenderFunction<any, NavigatorProps> = (props, ref) => {
  const { className, url, action, hoverClassName, hoverStartTime, hoverStayTime, ...restProps } = filterProps(props);
  const history = RuntimeOptions.get('history');

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
export default React.forwardRef(Navigator);
