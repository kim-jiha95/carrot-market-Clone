import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';
import HomeAddPage from '../pages/HomeAddPage';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MyPage from '../pages/MyPage';
import Home_Detail from '../pages/Home_Detail';

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
      <Stack.Screen name="Home_Detail" component={Home_Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;