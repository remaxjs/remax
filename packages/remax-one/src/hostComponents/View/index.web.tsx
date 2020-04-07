import * as React from 'react';
import clsx from 'clsx';
import { ViewWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import { LONG_TAP_DURATION } from '../../constants';

const View: React.FC<ViewWebProps> = props => {
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
  } = props;
  const [hovered, setHover] = React.useState(false);
  const hoveringRef = React.useRef(false);

  function handleTouchStart(e: any) {
    hoveringRef.current = true;

    setTimeout(() => {
      if (hoveringRef.current) {
        setHover(true);
      }
    }, hoverStartTime);

    setTimeout(() => {
      if (hoveringRef.current && typeof onLongTap === 'function') {
        onLongTap(e);
      }
    }, LONG_TAP_DURATION);

    if (typeof onTouchStart === 'function') {
      return onTouchStart(e);
    }
  }

  function handleTouchMove(e: any) {
    hoveringRef.current = false;

    setTimeout(() => {
      if (hovered) {
        setHover(false);
      }
    }, hoverStayTime);

    if (typeof onTouchMove === 'function') {
      return onTouchMove(e);
    }
  }

  function handleTouchEnd(e: any) {
    hoveringRef.current = false;

    setTimeout(() => {
      if (hovered) {
        setHover(false);
      }
    }, hoverStayTime);

    if (typeof onTouchEnd === 'function') {
      return onTouchEnd(e);
    }
  }

  function handleTouchCancel(e: any) {
    hoveringRef.current = false;

    setTimeout(() => {
      if (hovered) {
        setHover(false);
      }
    }, hoverStayTime);

    if (typeof onTouchCancel === 'function') {
      return onTouchCancel(e);
    }
  }

  return (
    <div
      {...filterProps(restProps)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      className={clsx(className, { hoverClassName: hovered })}
      onClick={onTap}
    />
  );
};

View.defaultProps = {
  hoverStayTime: 400,
  hoverStartTime: 50,
};

export default View;
