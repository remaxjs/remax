import { promisify } from '@alipay/remix-shared';

declare const my: any;

export default promisify(my.chooseImage);
