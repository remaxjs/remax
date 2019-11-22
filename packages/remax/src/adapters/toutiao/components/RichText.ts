import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

interface Node {
  name: string;
  attrs?: any;
  children?: Node[];
}

export interface RichText extends BaseProps {
  nodes?: Node | string;
}

const RichText = createHostComponent<RichText>('rich-text');

export default RichText;
