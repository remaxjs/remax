import factory from './factory';
export interface IconProps {
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
const Icon = factory<IconProps>('icon');

export default Icon;
