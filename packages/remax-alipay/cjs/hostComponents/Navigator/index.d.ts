export interface NavigatorProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack' | 'reLaunch';
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  url: string;
}
declare const _default: import('react').ForwardRefExoticComponent<NavigatorProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
