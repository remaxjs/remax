import * as React from 'react';
export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  width: number;
  height: number;
}
declare const MovableArea: React.ForwardRefExoticComponent<MovableAreaProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default MovableArea;
