import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  name: 'name',
  className: 'class',
  style: 'style',
  value: 'value',
  checked: 'checked',
  disabled: 'disabled',
  color: 'color',
};

export const props = unique(Object.values(alias));
