import { useContext } from 'react';
import { PageInstanceContext } from '@remax/framework-shared';

export default function useQuery<
  Q extends Record<string, string | undefined> = { [name: string]: string | undefined }
>(): Q {
  const pageInstance: any = useContext(PageInstanceContext);
  return pageInstance.query;
}
