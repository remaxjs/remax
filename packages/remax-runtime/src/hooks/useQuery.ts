import { useContext } from 'react';
import PageContext from '../PageContext';

export default function useQuery<Q extends Record<string, string | undefined> = { [name: string]: string | undefined }>(): Q {
  const pageInstance: any = useContext(PageContext)?.page;
  return pageInstance?.query;
}
