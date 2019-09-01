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
  onClick?: (event: any) => void;
  onTouchStart?: (event: any) => void;
  onTouchMove?: (event: any) => void;
  onTouchEnd?: (event: any) => void;
  onTouchCancel?: (event: any) => void;
  onLongClick?: (event: any) => void;
  onTransitionEnd?: (event: any) => void;
  onAnimationIteration?: (event: any) => void;
  onAnimationStart?: (event: any) => void;
  onAnimationEnd?: (event: any) => void;
  animation?: Record<string, any>[];
}

export default View;
