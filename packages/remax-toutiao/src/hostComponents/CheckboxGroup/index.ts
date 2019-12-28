import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface CheckboxGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

export default createHostComponent<CheckboxGroupProps>('checkbox-group');
