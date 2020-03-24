/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { TapEvent, TouchStartEvent, TouchEndEvent, TouchMoveEvent, TouchCancelEvent } from '../../types';

export interface ViewProps extends React.AriaAttributes {
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
  onTap?: (event: TapEvent) => void;
  onTouchStart?: (event: TouchStartEvent) => void;
  onTouchMove?: (e: TouchMoveEvent) => void;
  onTouchEnd?: (e: TouchEndEvent) => void;
  onTouchCancel?: (e: TouchCancelEvent) => void;
  onLongTap?: (e: TapEvent) => void;
}

const View = createHostComponent<ViewProps>('view');

export default View;
