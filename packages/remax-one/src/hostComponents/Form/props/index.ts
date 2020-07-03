import * as React from 'react';
import { FormEvent } from '../../../types';

export { default as defaults } from './default';

interface CommonProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface FormProps extends CommonProps {
  onSubmit?: (e: FormEvent) => void;
  onReset?: (e: FormEvent) => void;
}

export interface FormWebProps extends CommonProps, React.HTMLAttributes<HTMLFormElement> {}
