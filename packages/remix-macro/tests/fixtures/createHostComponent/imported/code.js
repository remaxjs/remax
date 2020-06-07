import {} from '@alipay/remix';
import { createHostComponent } from '../../../../lib/macro';

createHostComponent('host-component', ['prop', ['foo', 'bar']]);
