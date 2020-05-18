import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface CanvasProps extends BaseProps {
  canvasId: string;
}

export const Canvas = createHostComponent<CanvasProps>('canvas');
