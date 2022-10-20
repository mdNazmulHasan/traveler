import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {colorBox, windowHeight, windowWidth} from '../utils/commonStyles';
const LoginScreen = ({navigation}) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '925749541564-j21rdbvnia7kjal5vnqsi7qgqb44m7kk.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      navigation.navigate('Home');
    } catch (error) {
      console.log('🚀 ~ file: Login.js ~ line 27 ~ signIn ~ error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#d9d9d9',
          width: windowWidth,
          height: windowHeight * 0.5,
          marginRight: -50,
          borderRadius: 32,
          marginTop: windowHeight * 0.5,
        }}
      />

      <View
        style={{
          backgroundColor: '#A0697A',
          width: windowWidth,
          height: windowHeight * 0.9,
          marginRight: -windowWidth * 0.27,
          marginTop: -windowHeight * 0.46,
          borderRadius: 32,
        }}>
        <View
          style={{
            marginLeft: windowWidth * 0.15,
            marginTop: windowHeight * 0.25,
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
          <GoogleSigninButton
            style={{
              width: 192,
              height: 48,
            }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
