import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface ViewProps extends BaseProps {
  slot?: string;
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  onFocus?: (e: any) => void;
  onTap?: (e: any) => any;
  onClick?: (e: any) => any;
  onTouchStart?: (e: any) => any;
  onTouchMove?: (e: any) => any;
  onTouchEnd?: (e: any) => any;
  onTouchCancel?: (e: any) => any;
  onLongTap?: (e: any) => any;
  onLongClick?: (e: any) => any;
  onTransitionEnd?: (e: any) => any;
  onAnimationIteration?: (e: any) => any;
  onAnimationStart?: (e: any) => any;
  onAnimationEnd?: (e: any) => any;
}

export const View: React.ComponentType<ViewProps> = createHostComponent<ViewProps>('view');

View.defaultProps = {
  hoverClassName: 'none',
  hoverStartTime: 50,
  hoverStayTime: 400,
  hoverStopPropagation: false,
};
