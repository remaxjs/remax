import factory from './factory';

export interface NavigatorProps {
  url: string;
  delta?: number;
  openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack';
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

const Navigator = factory<NavigatorProps>('navigator');

export default Navigator;
