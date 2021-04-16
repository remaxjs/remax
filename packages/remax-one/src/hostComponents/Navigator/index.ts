import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { NavigatorProps } from './props';
import defaults from './props/default';

export type { NavigatorProps };

const Navigator: React.ComponentType<NavigatorProps> = createHostComponent<NavigatorProps>('navigator', null, defaults);

export default Navigator;
