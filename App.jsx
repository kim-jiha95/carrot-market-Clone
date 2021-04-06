import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import StackNavigator from './navigations/StackNavigator';

import TabNavigator from './navigations/TabNavigator';

import HoodPage from "./pages/HoodPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MyPage from "./pages/MyPage";

const Stack = createStackNavigator();


export default function App() {
      const[loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <StackNavigator/>       
   </NavigationContainer>    
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