import React from 'react';
import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import {DrawerPersanalizadoNavigator } from './src/screens/DrawerPersonalizado';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <DrawerNavigator/> */}
      <DrawerPersanalizadoNavigator/>
    </NavigationContainer>
  )
}

export default App;