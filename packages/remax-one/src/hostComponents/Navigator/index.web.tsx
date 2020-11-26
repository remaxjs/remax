import * as React from 'react';
import clsx from 'clsx';
import { RuntimeOptions } from '@remax/runtime';
import { NavigatorProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import useWebTouch from '../useWebTouch';

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
      case 'switchTab':
        history.replace(url);
        break;
      case 'navigate':
      default:
        history.push(url);
        break;
    }
  }

  const [hovered, handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel] = useWebTouch({
    hoverDelay: hoverStartTime,
    hoverDuration: hoverStayTime,
  });

  return (
    <div
      {...restProps}
      onClick={handleTap}
      className={clsx(className, { [hoverClassName || '']: hovered })}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={ref}
      onTouchCancel={handleTouchCancel}
    />
  );
};
export default React.forwardRef(Navigator);
