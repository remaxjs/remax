import factory from './factory';

export interface NavigatorProps {
  id?: string;
  openType?:
    | 'navigate'
    | 'redirect'
    | 'switchTab'
    | 'navigateBack'
    | 'reLaunch';
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  url?: string;
}

const Navigator = factory<NavigatorProps>('navigator');

export default Navigator;
