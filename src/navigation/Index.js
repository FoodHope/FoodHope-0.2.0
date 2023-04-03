import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
    const { currentUser } = useAuth();

    return <NavigationContainer>

        {currentUser ? (
            <Stack.Navigator initialRouteName='UserStack' screenOptions={{ headerShown: false,  }}>
                <Stack.Screen name='UserStack' component={UserStack} />
            </Stack.Navigator>)
            : <AuthStack />}
    </NavigationContainer>
};