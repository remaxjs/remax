import { useContext } from 'react';
import PageContext from '../PageContext';

export default function useQuery<Q extends Record<string, string> = { [name: string]: string }>(): Q {
  const pageInstance: any = useContext(PageContext)?.page;
  return pageInstance?.query;
}
