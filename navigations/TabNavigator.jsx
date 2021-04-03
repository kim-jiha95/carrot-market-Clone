import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import HomePage from '../pages/HomePage';
import HoodPage from '../pages/HoodPage';
import ChatPage from '../pages/ChatPage';
import MyPage from '../pages/MyPage';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName,AntName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          if (route.name === 'MainPage') {
            iconName += 'browsers-sharp';
          } else if (route.name === 'AddPage') {
            AntName="profile";
          } else if (route.name === 'MyPage') {
            iconName += 'chatbubbles-outline';
            // 채팅 수 표현 방법
          } else if (route.name === 'MyPage') {
            iconName += 'face-profile';
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? 'tomato' : 'grey'}
              size={26}
            />,
            <AntDesign
              name={AntName}
              color={focused ? 'tomato' : 'grey'}
              size={26}
            />
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