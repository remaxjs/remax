import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

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
  disableLowerScroll?: 'always' | 'out-of-bounds';
  disableUpperScroll?: 'always' | 'out-of-bounds';
  onScrollToUpper?: (e: any) => void;
  onScrollToLower?: (e: any) => void;
  onScroll?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
}

export const ScrollView = createHostComponent<ScrollViewProps>('scroll-view') as React.ComponentType<ScrollViewProps>;
