import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface RadioGroupProps extends BaseProps {
  name?: string;
  onChange?: (e: any) => void;
}

export default createHostComponent<RadioGroupProps>('radio-group');
