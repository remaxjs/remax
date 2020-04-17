export interface IconProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className: string;
  type:
    | 'info'
    | 'warn'
    | 'waiting'
    | 'cancel'
    | 'download'
    | 'search'
    | 'clear'
    | 'success'
    | 'success_no_circle'
    | 'loading';
  size?: number;
  color?: string;
}
declare const _default: import('react').ForwardRefExoticComponent<IconProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
