import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export default function Index() {
    const { currentUser } = useAuth();

    return <NavigationContainer >{true ? <UserStack /> : <AuthStack />}</NavigationContainer>;
}