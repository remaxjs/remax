import factory from './factory';

export interface SwiperProps {
  id?: string;
  className?: string;
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  activeClass?: string;
  changingClass?: string;
  autoplay?: boolean;
  current?: number;
  duration?: number;
  interval?: number;
  circular?: number;
  vertical?: number;
  previousMargin?: string;
  nextMargin?: string;
  acceleration?: boolean;
  disableProgrammaticAnimation?: boolean;
  disableTouch?: boolean;
  onChange?: (e: any) => void;
  onTransition?: (e: any) => void;
  onAnimationEnd?: (e: any) => void;
}

const Swiper = factory<SwiperProps>('swiper');

export default Swiper;
