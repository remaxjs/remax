import * as React from 'react';
export interface ScrollViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  scrollX?: boolean;
  scrollY?: boolean;
  upperThreshold?: number;
  lowerThreshold?: number;
  scrollTop?: number;
  scrollLeft?: number;
  scrollIntoView?: string;
  scrollWithAnimation?: boolean;
  scrollAnimationDuration?: number;
  enableBackToTop?: boolean;
  trapScroll?: boolean;
  onScrollToUpper?: (e: any) => void;
  onScrollToLower?: (e: any) => void;
  onScroll?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
}
declare const ScrollView: React.ForwardRefExoticComponent<ScrollViewProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default ScrollView;
