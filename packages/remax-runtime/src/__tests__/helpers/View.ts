import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface ViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  disableScroll?: boolean;
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hidden?: boolean;
  animation?: any;
  hoverStopPropagation?: boolean;
  slot?: string;
  onTap?: (e: any) => void;
  catchTap?: (e: any) => void;
  onClick?: (e: any) => void;
  catchClick?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onLongTap?: (e: any) => void;
  onTransitionEnd?: (e: any) => void;
  onAnimationIteration?: (e: any) => void;
  onAnimationStart?: (e: any) => void;
  onAnimationEnd?: (e: any) => void;
  onAppear?: (e: any) => void;
  onDisappear?: (e: any) => void;
  onFirstAppear?: (e: any) => void;
}

const View = createHostComponent<ViewProps>('view');

export default View;
