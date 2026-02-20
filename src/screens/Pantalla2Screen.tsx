import React from 'react';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface RouterParams {
    id: number;
    nombre: string;
    edad: number;
}

export const Pantalla2Screen = () => {
    //hook useNavigation: permite navegar de una pantalla a otra
    const navigation = useNavigation();
    return (
        <View style = { stylesGlobal.container } >
            <Text style = { stylesGlobal.title } >Pantalla2 Screen</Text>
            <Button title='Ir pantalla 3' onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla3'}))} />
            <Button title='Ir persona' onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla3'}))} />
        </View>
    )
}
