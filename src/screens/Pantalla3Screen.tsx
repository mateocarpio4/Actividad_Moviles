import React from 'react';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'Pantalla3'>;

export const Pantalla3Screen = ({navigation} : Props) => {
    return (
        <View style = { stylesGlobal.container } >
            <Text style = { stylesGlobal.title } > Pantalla3 Screen </Text>
            <Button title='Regresar' onPress={ () => navigation.goBack()} />
            <Button title='Ir Home' onPress={() => navigation.popToTop()} />
        </View>
    )
}
