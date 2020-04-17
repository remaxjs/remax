export interface SwiperProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  activeClassName?: string;
  changingClassName?: string;
  autoplay?: boolean;
  current?: number;
  duration?: number;
  interval?: number;
  circular?: boolean;
  vertical?: boolean;
  previousMargin?: string;
  nextMargin?: string;
  acceleration?: boolean;
  disableProgrammaticAnimation?: boolean;
  disableTouch?: boolean;
  onChange?: (e: any) => void;
  onTransition?: (e: any) => void;
  onAnimationEnd?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<SwiperProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
