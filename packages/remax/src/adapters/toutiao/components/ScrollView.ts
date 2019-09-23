import factory from './factory';

export interface ScrollViewProps {
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

const ScrollView = factory<ScrollViewProps>('scroll-view');

export default ScrollView;
