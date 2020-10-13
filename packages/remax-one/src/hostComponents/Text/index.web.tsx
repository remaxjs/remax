import * as React from 'react';
import clsx from 'clsx';
import { TextWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export type TextProps = TextWebProps;

const Text: React.ForwardRefRenderFunction<any, TextWebProps> = (props, ref) => {
  const {
    onTap,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    className,
    selectable,
    ...restProps
  } = filterProps(props);
  const hoveringRef = React.useRef(false);

  function handleTouchStart(e: any) {
    hoveringRef.current = true;

    if (typeof onTouchStart === 'function') {
      return onTouchStart(e);
    }
  }

  function handleTouchMove(e: any) {
    hoveringRef.current = false;

    if (typeof onTouchMove === 'function') {
      return onTouchMove(e);
    }
  }

  function handleTouchEnd(e: any) {
    hoveringRef.current = false;

    if (typeof onTouchEnd === 'function') {
      return onTouchEnd(e);
    }
  }

  function handleTouchCancel(e: any) {
    hoveringRef.current = false;

    if (typeof onTouchCancel === 'function') {
      return onTouchCancel(e);
    }
  }

  return (
    <span
      {...restProps}
      className={clsx(className, {
        'remax-text-selectable': selectable,
      })}
      ref={ref}
      onClick={onTap}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    />
  );
};

export default React.forwardRef(Text);
