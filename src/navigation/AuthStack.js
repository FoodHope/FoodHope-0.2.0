import { View, Text } from 'react-native'
import React from 'react'
import RegistrationScreen from '../views/screens/RegistrationScreen'
import LoginScreen from '../views/screens/LoginScreen'
// import ResetPasswordScreen from '../views/screens/ResetPasswordScreen'
import ForgotPasswordScreen from '../views/screens/ForgotPasswordScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName={"LoginScreen"}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}