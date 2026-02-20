import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps <any, any>;
//Crear una interfaz para los parametros de navegacion 
/* interface RouterParams{
    id: number;
    nombre: string;
    edad: number;
} */

export const PersonaScreen = ({route}:Props) => {
    //console.log(props);
    const params =route.params;
    //console.log(params);
    
    return (
        <View style={stylesGlobal.container}>
            <Text style = {stylesGlobal.title}>Persona Screen</Text>
            <Text>{JSON.stringify(params)}</Text>
        </View>
    )
}
