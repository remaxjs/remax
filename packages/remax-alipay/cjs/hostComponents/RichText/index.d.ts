export interface RichTextNode {
  readonly dataset?: DOMStringMap;
  type?: string;
  name: string;
  attrs?: any;
  children?: RichTextNode;
}
export interface RichTextProps {
  nodes?: RichTextNode[];
}
declare const _default: import('react').ForwardRefExoticComponent<RichTextProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
