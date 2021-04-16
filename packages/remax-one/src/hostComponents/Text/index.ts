import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import TextProps from './props';
import defaults from './props/default';

export type { TextProps };

const Text: React.ComponentType<TextProps> = createHostComponent<TextProps>('text', null, defaults);

export default Text;
