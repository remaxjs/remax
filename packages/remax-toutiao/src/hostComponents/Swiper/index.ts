import { createHostComponent } from '@remax/shared';

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
  onChange?: (e: any) => void;
  onTransition?: (e: any) => void;
  onAnimationFinish?: (e: any) => void;
}

export const Swiper = createHostComponent<SwiperProps>('swiper');
