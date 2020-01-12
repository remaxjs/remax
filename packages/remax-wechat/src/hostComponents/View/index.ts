import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface ViewProps extends BaseProps {
  slot?: string;
  /** 指定按下去的样式类。当为 "none" 时，没有点击态效果 1.0.0  */
  hoverClass?: string;
  /** 指定是否阻止本节点的祖先节点出现点击态 1.5.0  */
  hoverStopPropagation?: boolean;
  /** (default: 50) 按住后多久出现点击态，单位毫秒 1.0.0  */
  hoverStartTime?: number;
  /** (default: 400) 手指松开后点击态保留时间，单位毫秒 1.0.0  */
  hoverStayTime?: number;
  disableScroll?: boolean;
  onTouchStart?: (event: any) => any;
  onTouchMove?: (event: any) => any;
  onTouchEnd?: (event: any) => any;
  onTouchCancel?: (event: any) => any;
  onLongClick?: (event: any) => any;
  onTransitionEnd?: (event: any) => any;
  onAnimationIteration?: (event: any) => any;
  onAnimationStart?: (event: any) => any;
  onAnimationEnd?: (event: any) => any;
}

export default createHostComponent<ViewProps>('view');
