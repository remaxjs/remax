import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface TextProps extends BaseProps {
  selectable?: boolean;
  space?: string | boolean;
  decode?: boolean;
}

export default createHostComponent<TextProps>('text');
