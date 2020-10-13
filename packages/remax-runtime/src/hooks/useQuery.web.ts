import { useLocation } from '@remax/web';
import qs from 'qs';

export default function useQuery<Q extends Record<string, string> = { [name: string]: string }>(): Q {
  return qs.parse(useLocation().search, { ignoreQueryPrefix: true }) as Q;
}
