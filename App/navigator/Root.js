import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login} from '../screens';

const Stack = createNativeStackNavigator();
function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default Root;
