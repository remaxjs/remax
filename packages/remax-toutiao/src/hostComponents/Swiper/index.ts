import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface SwiperProps extends BaseProps {
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  autoplay?: boolean;
  current?: number;
  currentItemId?: string;
  duration?: number;
  interval?: number;
  displayMultipleItems?: number;
  circular?: boolean;
  vertical?: boolean;
  previousMargin?: string;
  nextMargin?: string;
  onChange?: (e: any) => void;
  onTransition?: (e: any) => void;
  onAnimationFinish?: (e: any) => void;
}

export const Swiper: React.ComponentType<SwiperProps> = createHostComponent<SwiperProps>('swiper');

Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, 0.3)',
  indicatorActiveColor: 'rgba(0, 0, 0, 0)',
  autoplay: false,
  current: 0,
  currentItemId: '',
  interval: 5000,
  previousMargin: '',
  nextMargin: '',
  displayMultipleItems: 1,
  duration: 500,
  circular: false,
  vertical: false,
};
