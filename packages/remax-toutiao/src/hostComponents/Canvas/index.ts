import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface CanvasProps extends BaseProps {
  cavasId: string;
}

export const Canvas = createHostComponent<CanvasProps>('canvas');
