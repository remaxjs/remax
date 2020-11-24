import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface ScrollViewProps extends BaseProps {
  scrollX?: boolean;
  scrollY?: boolean;
  upperThreshold?: number;
  lowerThreshold?: number;
  scrollTop?: number;
  scrollLeft?: number;
  scrollIntoView?: string;
  scrollWithAnimation?: boolean;
  onScrollToUpper?: (e: any) => void;
  onScrollToLower?: (e: any) => void;
  onScroll?: (e: any) => void;
}

export const ScrollView: React.ComponentType<ScrollViewProps> = createHostComponent<ScrollViewProps>('scroll-view');

ScrollView.defaultProps = {
  scrollX: false,
  scrollY: false,
  upperThreshold: 50,
  lowerThreshold: 50,
  scrollWithAnimation: false,
};
