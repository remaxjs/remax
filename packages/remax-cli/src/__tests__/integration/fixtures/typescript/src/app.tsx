import React, { createContext, useState } from 'react';
import './app.css';

interface AppContext {
  bindStatus: boolean;
}

function useAppContextValue() {
  const [bindStatus] = useState(false);

  return {
    bindStatus,
  };
}

const defaultAppContext = new Proxy(
  {},
  {
    get() {
      throw new Error('This object should never be called');
    },
  }
) as AppContext;

export const AppContext = createContext<AppContext>(defaultAppContext);

const AppContextProvider = (props: { children?: React.ReactNode }) => {
  const context = useAppContextValue();

  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>;
};

export default class App extends React.Component {
  render() {
    return <AppContextProvider>{this.props.children}</AppContextProvider>;
  }
}
