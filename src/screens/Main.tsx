import { View, Text } from 'react-native';
import React from 'react';
const Stack = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Main = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export default Main;
