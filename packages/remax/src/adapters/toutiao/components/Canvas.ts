import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface CanvasProps extends BaseProps {
  cavasId: string;
}

const Canvas = createHostComponent<CanvasProps>('canvas');

export default Canvas;
