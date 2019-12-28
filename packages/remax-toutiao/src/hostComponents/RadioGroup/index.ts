import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface RadioGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

export default createHostComponent<RadioGroupProps>('radio-group');
