import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigator/Root';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
