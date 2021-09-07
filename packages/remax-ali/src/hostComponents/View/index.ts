import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

/** 无障碍属性 */
// reference: https://opendocs.alipay.com/mini/component/accessibility
export interface AriaProps {
  ariaHidden?: string;
  ariaRole?: string;
  ariaLabel?: string;
  ariaChecked?: string;
  ariaDisabled?: string;
  ariaDescribedby?: string;
  ariaExpanded?: string;
  ariaHaspopup?: string;
  ariaSelected?: string;
  ariaRequired?: string;
  ariaOrientation?: string;
  ariaValuemin?: string;
  ariaValuemax?: string;
  ariaValuenow?: string;
  ariaReadonly?: string;
  ariaMultiselectable?: string;
  ariaControls?: string;
  tabindex?: string;
  ariaLabelledby?: string;
  ariaModal?: string;
  ariaLive?: string;
  ariaAtomic?: string;
  ariaRelevant?: string;
}

export interface ViewProps extends AriaProps {
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

export const View = createHostComponent<ViewProps>('view') as React.ComponentType<ViewProps>;
