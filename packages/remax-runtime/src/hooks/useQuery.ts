import { useContext } from 'react';
import PageInstanceContext from '../PageInstanceContext';

export default function useQuery<Q extends {} = { [name: string]: string }>(): Q {
  const pageInstance: any = useContext(PageInstanceContext);
  return pageInstance.query;
}
