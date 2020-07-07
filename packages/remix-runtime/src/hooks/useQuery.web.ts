import { useLocation } from '@alipay/remix-web';
import qs from 'qs';

export default function useQuery<Q extends {} = { [name: string]: string }>(): Q {
  return qs.parse(useLocation().search, { ignoreQueryPrefix: true }) as Q;
}
