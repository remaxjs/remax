import * as React from 'react';
import { LONG_TAP_DURATION } from '../constants';

interface UseWebTouchParams {
  hoverDelay?: number;
  onLongTap?: (event: any) => void;
  onTouchCancel?: (event: any) => void;
  onTouchEnd?: (event: any) => void;
  onTouchMove?: (event: any) => void;
  onTouchStart?: (event: any) => void;
  hoverDuration?: number;
}

function useWebTouch<T>({
  hoverDuration,
  hoverDelay,
  onLongTap,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
}: UseWebTouchParams): [
  boolean,
  (event: React.TouchEvent<T>) => void,
  (event: React.TouchEvent<T>) => void,
  (event: React.TouchEvent<T>) => void,
  (event: React.TouchEvent<T>) => void
] {
  const [touching, setTouching] = React.useState(false);
  const hoveringRef = React.useRef(false);
  const timers = React.useRef<number[]>([]);

  function executeTimeout(callback: () => void, time?: number) {
    const timer = setTimeout(() => {
      callback();
      timers.current.filter(t => t !== timer);
    }, time);
    timers.current.push(timer);
  }

  React.useEffect(
    () => () => {
      timers.current.forEach(t => clearTimeout(t));
    },
    []
  );

  function handleTouchStart(e: any) {
    hoveringRef.current = true;

    executeTimeout(() => {
      if (hoveringRef.current) {
        setTouching(true);
      }
    }, hoverDelay);

    executeTimeout(() => {
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

    executeTimeout(() => {
      if (touching) {
        setTouching(false);
      }
    }, hoverDuration);

    if (typeof onTouchMove === 'function') {
      return onTouchMove(e);
    }
  }

  function handleTouchEnd(e: any) {
    hoveringRef.current = false;

    executeTimeout(() => {
      if (touching) {
        setTouching(false);
      }
    }, hoverDuration);

    if (typeof onTouchEnd === 'function') {
      return onTouchEnd(e);
    }
  }

  function handleTouchCancel(e: any) {
    hoveringRef.current = false;

    executeTimeout(() => {
      if (touching) {
        setTouching(false);
      }
    }, hoverDuration);

    if (typeof onTouchCancel === 'function') {
      return onTouchCancel(e);
    }
  }

  return [touching, handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel];
}

export default useWebTouch;
