import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

export interface CanvasProps extends BaseProps {
  cavasId: string;
}

const Canvas = createHostComponent<CanvasProps>('canvas');

export default Canvas;
