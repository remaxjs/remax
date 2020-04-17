export interface ContactButtonProps {
  readonly dataset?: DOMStringMap;
  tntInstId: string;
  scene: string;
  size?: string | number;
  color?: string;
  icon?: string;
  alipayCardNo?: string;
}
declare const _default: import('react').ForwardRefExoticComponent<ContactButtonProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
