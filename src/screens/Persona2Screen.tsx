import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';

interface RouterParams {
    id: number;
    nombre: string;
    edad: number;
}

export const Persona2Screen = () => {
    //hook useRoote
    const route = useRoute();
    //console.log(route.params);
    const params = route.params as RouterParams;

  return (
    <View style={stylesGlobal.container}>
        <Text style= {stylesGlobal.title}>Persona2 Screen</Text>
        <Text>{params.id}</Text>
    </View>
  )
}
