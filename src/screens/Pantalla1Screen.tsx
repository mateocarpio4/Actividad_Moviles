import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

type  Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

interface Persona {
    id: number;
    nombre: string;
    edad: number
}

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props);
    //Crear objeto
    const persona: Persona = {
        id:1,
        nombre: 'Mateo',
        edad: 25,
    }
    const persona1: Persona= {
        id: 2,
        nombre: 'Marco',
        edad: 30,
    }
    return (
        <View style = { stylesGlobal.container }>
            <Text style = { stylesGlobal.title }> Pantalla1 Screen</Text>
            <Button title='Ir pantalla 2' onPress={() => navigation.navigate('Pantalla2')} />
            <TouchableOpacity onPress={() => navigation.navigate('Persona', persona)}> <Text> Mateo </Text> </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Persona', persona1)}> <Text> Marco </Text> </TouchableOpacity>
        </View>
    )
}
