import factory from './factory';
import { CSSProperties } from 'react';

const MovableArea = factory<MovableAreaProps>('movable-area');

export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** (default: false) 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area 1.9.90 */
  scaleArea?: boolean;
  onClick?: (event: any) => any;
}

export default MovableArea;
