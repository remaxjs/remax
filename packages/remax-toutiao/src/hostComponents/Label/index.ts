import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface LabelProps extends BaseProps {
  for?: string;
}

export default createHostComponent<LabelProps>('label');
