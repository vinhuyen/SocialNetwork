import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Feeds from '../screens/Feeds';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name={'Login'} component={Login} />
      <Stack.Navigator name={'Feed'} component={Feeds} />
    </NavigationContainer>
  );
};
