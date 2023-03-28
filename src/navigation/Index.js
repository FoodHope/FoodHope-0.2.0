import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import UserStack from './UserStack';
import AuthStack from './AuthStack';

export default function Index() {
    const { currentUser } = useAuth();

    return currentUser ? <UserStack/> : <AuthStack/>;
}