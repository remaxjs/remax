import * as React from 'react';
import Container from './Container';

const PageContext = React.createContext<{ page: any; modalContainer: Container } | null>(null);

PageContext.displayName = 'PageContext';

export default PageContext;
