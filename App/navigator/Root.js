import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddNewPlaceScreen, AppLoadingScreen, LoginScreen} from '../screens';
import MainTab from './MainTab';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();
function Root() {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '925749541564-j21rdbvnia7kjal5vnqsi7qgqb44m7kk.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

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
      <Stack.Screen name="Add" component={AddNewPlaceScreen} />
    </Stack.Navigator>
  );
}
export default Root;
