import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  name: 'name',
  className: 'class',
  style: 'style',
  value: 'value',
  indicatorStyle: 'indicator-style',
  indicatorClass: 'indicator-class',
  indicatorClassName: 'indicator-class',
  maskStyle: 'mask-style',
  maskClass: 'mask-class',
  maskClassName: 'mask-class',
  onChange: 'onChange',
};

export const props = unique(Object.values(alias));
