import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import AppNavigator from './src/navigations';

const App = (): React.JSX.Element => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
