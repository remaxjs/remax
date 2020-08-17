import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface SwiperProps extends BaseProps {
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  autoplay?: boolean;
  current?: number;
  currentItemId?: string;
  interval?: number;
  duration?: number;
  circular?: boolean;
  vertical?: boolean;
  previousMargin?: string;
  nextMargin?: string;
  displayMultipleItems?: number;
  onChange?: (event: any) => void;
  onAnimationFinish?: (event: any) => void;
}

export const Swiper: React.ComponentType<SwiperProps> = createHostComponent<SwiperProps>('swiper');

Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0,0,0,0.3)',
  indicatorActiveColor: '#333',
  autoplay: false,
  current: 0,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
};
