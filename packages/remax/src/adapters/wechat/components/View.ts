import factory from './factory';
import { CSSProperties } from 'react';

const View = factory<ViewProps>('view');

export interface ViewProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  hoverClassName?: string; // none 否 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 1.0.0
  hoverStopPropagation?: boolean; // false 否 指定是否阻止本节点的祖先节点出现点击态 1.5.0
  hoverStartTime?: number; // 50 否 按住后多久出现点击态，单位毫秒 1.0.0
  hoverStayTime?: number; // 400 否 手指松开后点击态保留时间，单位毫秒 1.0.0
  disableScroll?: boolean;
  onClick?: (event: any) => any;
  onTouchStart?: (event: any) => any;
  onTouchMove?: (event: any) => any;
  onTouchEnd?: (event: any) => any;
  onTouchCancel?: (event: any) => any;
  onLongClick?: (event: any) => any;
  onTransitionEnd?: (event: any) => any;
  onAnimationIteration?: (event: any) => any;
  onAnimationStart?: (event: any) => any;
  onAnimationEnd?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default View;
