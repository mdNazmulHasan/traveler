import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Header = ({navigation, back, title}) => {
  const _goBack = () => console.log('Went back');

  const _handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={_goBack} /> : null}
      <Appbar.Content title={title} />
      <Appbar.Action icon="power" onPress={_handleLogout} />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
