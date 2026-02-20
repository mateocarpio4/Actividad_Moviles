import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from '../navigator/StackNavigator';
import { SettingsScreen } from './SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerPersanalizadoNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <MenuLateral {...props} />}>
        <Drawer.Screen name="Stacknavigator" options={{title:"home"}} component={StackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

//componente menú lateral
const MenuLateral = ({navigation}: DrawerContentComponentProps) =>{
    return(
        <DrawerContentScrollView>
            <View style={stylesGlobal.containerAvatar}>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnd6p5ScTv8RWy8f2JdUoRJ136-U9tJz1WGQ&s'}} 
                style={stylesGlobal.avatar}/>
            </View>

            <View style={stylesGlobal.containerMenu}>
                <TouchableOpacity style = {stylesGlobal.menuButton} onPress={()=> navigation.navigate('StackNavigator')} >
                    <Text style = {stylesGlobal.menuText}>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {stylesGlobal.menuButton} onPress={()=> navigation.navigate('Settings')} >
                    <Text style = {stylesGlobal.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}