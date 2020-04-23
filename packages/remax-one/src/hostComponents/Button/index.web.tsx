import * as React from 'react';
import clsx from 'clsx';
import { ButtonWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import useWebTouch from '../useWebTouch';

const Button: React.FC<ButtonWebProps> = props => {
  const {
    hoverClassName,
    hoverStartTime,
    hoverStayTime,
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
      onTouchCancel={handleTouchCancel}
      className={clsx('remax-button', className, { [hoverClassName || '']: hovered })}
      onClick={onTap}
    />
  );
};

Button.defaultProps = {
  hoverStayTime: 400,
  hoverStartTime: 50,
};

export default Button;
