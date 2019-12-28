import createHostComponent from '../../createHostComponent';

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
}

export default createHostComponent<SwiperProps>('swiper');
