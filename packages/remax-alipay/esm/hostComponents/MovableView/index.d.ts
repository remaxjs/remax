import * as React from 'react';
export interface MovableViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
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
declare const MovableView: React.ForwardRefExoticComponent<MovableViewProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default MovableView;
