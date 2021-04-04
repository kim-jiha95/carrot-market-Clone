import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';

// const Stack = createStackNavigator();
import TabNavigator from './navigations/TabNavigator';
// import "React-native-gesture-handler";
// import {HomePage, HoodPage, ChatPage, MyPage} from '../pages'
import HoodPage from "./pages/HoodPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MyPage from "./pages/MyPage";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator 
    //     screenOptions={{
    //       headerShown: false
    //     }}
    //     initialRouteName={"Home"}
    //     >
    //       <Stack.Screen name ="HomePage" component={HomePage}/>
    //       <Stack.Screen name ="HoodPage" component={HoodPage}/>
    //       <Stack.Screen name ="ChatPage" component={ChatPage}/>
    //       <Stack.Screen name ="MyPage" component={MyPage}/>
    //       </Stack.Navigator>         
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});