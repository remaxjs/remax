import * as React from 'react';

const PageInstanceContext = React.createContext<any>(null);

PageInstanceContext.displayName = 'PageContext';

export default PageInstanceContext;
