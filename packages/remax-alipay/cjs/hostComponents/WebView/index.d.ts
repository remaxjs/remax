export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  src: string;
  onMessage?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<WebViewProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
