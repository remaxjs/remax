import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface ViewProps extends BaseProps {
  slot?: string;
  hoverClassName?: string;
  hoverStopPropagation?: boolean;
  hoverStartTime?: number;
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
  catchTouchMove?: (event: any) => any;
}

/**
 * 百度小程序暂不支持 flex 布局
 * https://github.com/NervJS/taro/issues/6015
 */
export const View: React.ComponentType<ViewProps> = createHostComponent<ViewProps>('view');

View.defaultProps = {
  hoverClassName: 'none',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 400,
  hidden: false,
};
