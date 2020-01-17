import createHostComponent from '../../createHostComponent';

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
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  url: string;
}

export default createHostComponent<NavigatorProps>('navigator');
