import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  width: number;
  height: number;
}

const MovableArea = createHostComponent<MovableAreaProps>('movable-area');

export default MovableArea;
