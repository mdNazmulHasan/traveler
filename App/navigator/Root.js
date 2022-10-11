import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppLoading, Home, Login} from '../screens';

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
        component={AppLoading}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default Root;
