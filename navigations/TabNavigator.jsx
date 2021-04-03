import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../pages/HomePage';
import HoodPage from '../pages/HoodPage';
import ChatPage from '../pages/ChatPage';
import MyPage from '../pages/MyPage';
import React from 'react';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          
          if (route.name === 'HomePage') {
            iconName += 'home-outline';
          } else if (route.name === 'HoodPage') {
            iconName += 'aperture-outline';
          } else if (route.name === 'ChatPage') {
            iconName += 'chatbubbles-outline';
            // 채팅 수 표현 방법
          } else if (route.name === 'MyPage') {
            iconName += 'person-outline';
          } 
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'tomato' : 'grey'}
              size={26}
            />
            //  <AntDesign
            //    name={AntName}
            //    color={focused ? 'tomato' : 'grey'}
            //    size={26}
            // />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 70,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen name="HomePage" component={HomePage} />
      <Tabs.Screen name="HoodPage" component={HoodPage} />
      <Tabs.Screen name="ChatPage" component={ChatPage} />
      <Tabs.Screen name="MyPage" component={MyPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;