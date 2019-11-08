import createHostComponent from '../../../createHostComponent';

export interface NavigatorProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  openType?:
    | 'navigate'
    | 'redirect'
    | 'switchTab'
    | 'navigateBack'
    | 'reLaunch';
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  url: string;
}

const Navigator = createHostComponent<NavigatorProps>('navigator');

export default Navigator;
