import React from 'react';
import { AlertProvider } from './components/Alert';
import AppContainer from './config/routes';
// Connect to back end here somehow
const App = () => {
  return (
    <AlertProvider>
      <AppContainer />
    </AlertProvider>
  );
};

export default App;
