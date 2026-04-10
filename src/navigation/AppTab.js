import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={Home} />
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppTab;