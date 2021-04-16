import * as React from 'react';
import { useAppEvent } from 'remax/macro';
import { GlobalContext } from './GlobalContext';

const App = props => {
  const [name, setName] = React.useState('');

  useAppEvent('onLaunch', () => {
    console.log('launch');
    setName('launch');
  });

  return <GlobalContext.Provider value={{ name }}>{props.children}</GlobalContext.Provider>;
};

export default App;
