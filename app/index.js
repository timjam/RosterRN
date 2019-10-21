import React from 'react';
import { AlertProvider } from './components/Alert';
import MainLayout from './screens/MainLayout';
import AppContainer from './config/routes';
// Connect to back end here somehow
const App = () => {
  return (
    <AlertProvider>
      <MainLayout />
    </AlertProvider>
  );
};

export default App;
