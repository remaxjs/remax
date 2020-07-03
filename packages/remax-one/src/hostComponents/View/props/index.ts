import * as React from 'react';
import { TapEvent, TouchStartEvent, TouchEndEvent, TouchMoveEvent, TouchCancelEvent } from '../../../types';

export { default as defaults } from './default';

interface CommonProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  slot?: string;
  className?: string;
  style?: React.CSSProperties;
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  role?: string;
}

export default interface ViewProps extends CommonProps, React.AriaAttributes {
  onTap?: (event: TapEvent) => void;
  onTouchStart?: (event: TouchStartEvent) => void;
  onTouchMove?: (e: TouchMoveEvent) => void;
  onTouchEnd?: (e: TouchEndEvent) => void;
  onTouchCancel?: (e: TouchCancelEvent) => void;
  onLongTap?: (e: TapEvent) => void;
}

export interface ViewWebProps extends CommonProps, React.HTMLAttributes<HTMLDivElement> {
  onTap?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLongTap?: (event: React.TouchEvent<HTMLDivElement>) => void;
}
