import * as React from 'react';
import clsx from 'clsx';
import { ViewWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import useWebTouch from '../useWebTouch';

export type ViewProps = ViewWebProps;

const View: React.ForwardRefRenderFunction<any, ViewProps> = (props, ref) => {
  const {
    hoverClassName,
    hoverStartTime = 50,
    hoverStayTime = 400,
    className,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTap,
    onLongTap,
    ...restProps
  } = filterProps(props);
  const [touching, handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel] = useWebTouch({
    hoverDelay: hoverStartTime,
    hoverDuration: hoverStayTime,
    onLongTap,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
  });

  return (
    <div
      {...restProps}
      ref={ref}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      className={clsx(className, { [hoverClassName || '']: touching })}
      onClick={onTap}
    />
  );
};

export default React.forwardRef(View);
