import * as React from 'react';
import factory from './factory';

export interface MovableViewProps {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  width: number;
  height: number;
  direction?: 'all' | 'vertical' | 'horizontal' | 'none';
  x?: number;
  y?: number;
  disabled?: boolean;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onTouchChange?: (e: any) => void;
  onChangeEnd?: (e: any) => void;
}
const MovableView = factory<MovableViewProps>('movable-view');

export default MovableView;
