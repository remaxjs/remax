import factory from './factory';

export interface CanvasProps {
  cavasId: string;
}

const Canvas = factory<CanvasProps>('canvas');

export default Canvas;
