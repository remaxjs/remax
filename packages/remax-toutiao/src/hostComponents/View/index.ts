import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface ViewProps extends BaseProps {
  slot?: string;
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
}

export const View = createHostComponent<ViewProps>('view');
