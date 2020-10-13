import * as React from 'react';
import clsx from 'clsx';
import { ButtonWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import useWebTouch from '../useWebTouch';

export type ButtonProps = ButtonWebProps;

const Button: React.ForwardRefRenderFunction<any, ButtonWebProps> = (props, ref) => {
  const {
    hoverClassName,
    hoverStartTime = 400,
    hoverStayTime = 50,
    className,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTap,
    onLongTap,
    ...restProps
  } = filterProps<ButtonWebProps>(props);
  const [hovered, handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel] = useWebTouch({
    hoverDelay: hoverStartTime,
    hoverDuration: hoverStayTime,
    onLongTap,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
  });

  return (
    <button
      {...restProps}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={ref}
      onTouchCancel={handleTouchCancel}
      className={clsx('remax-button', className, { [hoverClassName || '']: hovered })}
      onClick={onTap}
    />
  );
};

export default React.forwardRef(Button);
