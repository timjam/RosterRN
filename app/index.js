import React from 'react';
import { AlertProvider } from './components/Alert';
import { Text } from 'react-native';

// Connect to back end here somehow
const App = () => {
  return (
    <AlertProvider>
      <Text>Hello World</Text>
    </AlertProvider>
  );
};

export default App;
