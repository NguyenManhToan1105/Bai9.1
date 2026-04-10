import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
};

export default App;
/* cach 2
import React from 'react';
import MainNavigatorAsync from './src/navigation/MainNavigatorAsync';

const App = () => {
  return <MainNavigatorAsync />;
};

export default App;
*/