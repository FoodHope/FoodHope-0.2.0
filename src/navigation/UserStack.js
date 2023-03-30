import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../views/screens/HomeScreen';
import AccountScreen from '../views/screens/AccountScreen';
import AddScreen from '../views/screens/AddScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from "react-native-paper";



const Stack = createNativeStackNavigator();


const UserStack = ({ navigation }) => {
    return (<>
        {/* <NavigationContainer> */}

        <Stack.Navigator
            initialRouteName={"AddScreen"}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddScreen" component={AddScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
        </Stack.Navigator>
        <Button />
        {/* </NavigationContainer> */}
        <View style={{ display: 'flex', height: 50, flexDirection: 'row', justifyContent: 'space-around', marginTop: -30 }} >
            <Button
                icon={require('../conts/images/home.png')}
                onPress={() => {
                    navigation.navigate('HomeScreen');
                    console.log('Home pressed');
                }}
            />
            <Button
                icon={require('../conts/images/add.png')}
                onPress={() => {
                    navigation.navigate('AddScreen');
                    console.log('Add pressed');
                }}
            />

            <Button
                icon={require('../conts/images/account.png')}
                onPress={() => {
                    navigation.navigate('AddScreen');
                    console.log('Add pressed');
                }}
            />

        </View>

    </>

    )
}
export default UserStack;
