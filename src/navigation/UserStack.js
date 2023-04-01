import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../views/screens/HomeScreen';
import SettingsScreen from '../views/screens/SettingsScreen';
import AddScreen from '../views/screens/AddScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from "react-native-paper";
import { TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';


const Stack = createNativeStackNavigator();


const UserStack = ({ navigation }) => {
    return (<>
        <Stack.Navigator
            initialRouteName={"HomeScreen"}
            screenOptions={{
                headerShown: false,
                statusBarColor: '#5D5FEE',
            }}
            >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddScreen" component={AddScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>


        <View style={{
            backgroundColor: '#5D5FEE',
            display: 'flex',
            height: 60,
            paddingTop: 17,
            flexDirection: 'row',
            justifyContent: 'space-around',

        }} >

            <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
                <Image
                    source={require('../conts/images/home.png')}
                    style={{ width: 25, height: 25 }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("AddScreen")}>
                <Image
                    source={require('../conts/images/add.png')}
                    style={{ width: 25, height: 25 }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("SettingsScreen")}>
                <Image
                    source={require('../conts/images/settings.png')}
                    style={{ width: 25, height: 25 }}
                />
            </TouchableOpacity>

        </View>
    </>

    )
}
export default UserStack;
