import factory from './factory';

export interface SwiperProps {
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

const Swiper = factory<SwiperProps>('swiper');

export default Swiper;
