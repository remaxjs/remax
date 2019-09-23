import * as React from 'react';
import factory from './factory';

export interface CanvasProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  width?: string | number;
  height?: string | number;
  disableScroll?: boolean;
  onTap?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onLongTap?: (e: any) => void;
}
const Canvas = factory<CanvasProps>('canvas');

export default Canvas;
