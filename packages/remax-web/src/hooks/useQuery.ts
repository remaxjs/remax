import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { RuntimeOptions } from '@remax/framework-shared';

export default function useQuery<
  Q extends Record<string, string | undefined> = { [name: string]: string | undefined }
>(): Q {
  const location = RuntimeOptions.get('mpa') ? window.location : useLocation();

  return qs.parse(location.search, { ignoreQueryPrefix: true }) as Q;
}
