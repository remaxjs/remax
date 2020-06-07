import { createHostComponent as createHC } from 'remix';
import { createHostComponent } from '../../../../lib/macro';

createHostComponent('host-component', ['prop', ['foo', 'bar']]);
