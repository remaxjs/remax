import { createHostComponent } from '@remax/shared';

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

export const ScrollView = createHostComponent<ScrollViewProps>('scroll-view');
