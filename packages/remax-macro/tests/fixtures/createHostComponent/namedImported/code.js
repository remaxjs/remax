import { createHostComponent as createHC } from 'remax';
import { createHostComponent } from '../../../../lib/macro';

createHostComponent('host-component', ['prop', ['foo', 'bar']]);
