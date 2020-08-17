import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface ScrollViewProps extends BaseProps {
  scrollX?: boolean;
  scrollY?: boolean;
  upperThreshold?: number | string;
  lowerThreshold?: number | string;
  scrollTop?: number | string;
  scrollLeft?: number | string;
  scrollIntoView?: string;
  scrollWithAnimation?: boolean;
  enableBackToTop?: boolean;
  onScrollToupper?: (event: any) => void;
  onScrollTolower?: (event: any) => void;
  onScroll?: (event: any) => void;
}

export const ScrollView: React.ComponentType<ScrollViewProps> = createHostComponent<ScrollViewProps>('scroll-view');

ScrollView.defaultProps = {
  scrollX: false,
  scrollY: false,
  upperThreshold: 50,
  lowerThreshold: 50,
  scrollWithAnimation: false,
  enableBackToTop: false,
};
