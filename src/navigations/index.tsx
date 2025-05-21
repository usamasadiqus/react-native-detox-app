import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAuth} from './../context/AuthContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const AppNavigator: React.FC = () => {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
