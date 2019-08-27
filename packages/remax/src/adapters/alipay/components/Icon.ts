import factory from './factory';
export interface IconProps {
  id?: string;
  size?: number;
  color?: string;
}
const Icon = factory<IconProps>('icon');

export default Icon;
