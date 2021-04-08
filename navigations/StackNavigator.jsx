import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeAddPage from '../pages/HomeAddPage';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MyPage from '../pages/MyPage';
import HomeDetail from '../pages/HomeDetail';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="HomeAddPage" component={HomeAddPage}/>
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;