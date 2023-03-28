import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../views/screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function UserStack() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName={"HomeScreen"}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}