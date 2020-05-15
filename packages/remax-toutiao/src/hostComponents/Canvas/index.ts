import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface CanvasProps extends BaseProps {
  canvasId: string;
}

export default createHostComponent<CanvasProps>('canvas');
