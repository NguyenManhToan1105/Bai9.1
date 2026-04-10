import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppTab from './AppTab';

const MainNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

/* cach 2
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppTab from './AppTab';
import { getUser } from '../utils/storage';

const MainNavigatorAsync = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const userData = await getUser();
      setUser(userData);
      setLoading(false);
    };
    checkUser();
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      {user ? <AppTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigatorAsync;
*/