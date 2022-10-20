import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppLoadingScreen, LoginScreen} from '../screens';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();
function Root() {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AppLoading"
        component={AppLoadingScreen}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MainTab} />
    </Stack.Navigator>
  );
}
export default Root;
