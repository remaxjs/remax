import factory from './factory';
import { CSSProperties } from 'react';

const MovableArea = factory<MovableAreaProps>('movable-area');

export interface MovableAreaProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  scaleArea?: boolean; // false 否 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area 1.9.90
  onClick?: (event: any) => void;
}

export default MovableArea;
