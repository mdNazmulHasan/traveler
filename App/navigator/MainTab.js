import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WishlistScreen} from '../screens';
import MyPlacesScreen from '../screens/MyPlacesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Wish List') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === 'My Places') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Wish List" component={WishlistScreen} />
      <Tab.Screen name="My Places" component={MyPlacesScreen} />
    </Tab.Navigator>
  );
}
