import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as React from 'react';
import {View, Text} from 'react-native';
import {colorBox} from '../utils/commonStyles';

function AppLoadingScreen({navigation}) {
  React.useEffect(() => {
    async function checkIsSignedInAndSetNavigation() {
      try {
        const isSignedIn = await GoogleSignin.isSignedIn();

        if (isSignedIn) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        navigation.navigate('Home');
        // Any needed logic for failure
      }
    }
    checkIsSignedInAndSetNavigation();
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A0697A',
      }}>
      <Text
        style={{
          textAlign: 'center',
          width: 192,
          color: colorBox.white,
          fontSize: 30,
          fontFamily: 'IBMPlexMono-Bold',
        }}>
        Traveller
      </Text>
    </View>
  );
}

export default AppLoadingScreen;
