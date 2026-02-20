//Colocar los estilos globales
import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        textAlign: 'center'
    }, 
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    containerAvatar:{
        alignItems: 'center'
    },
    containerMenu:{
        margin: 30
    },
    menuText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuButton:{
        marginHorizontal: 10
    }
})