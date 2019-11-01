import factory from './factory';

interface Node {
  name: string;
  attrs?: any;
  children?: Node[];
}

export interface RichText {
  nodes?: Node | string;
}

const RichText = factory<RichText>('rich-text');

export default RichText;
