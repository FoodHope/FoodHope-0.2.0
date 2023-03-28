/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import Auth from './src/Auth';
import Index from './src/navigation/Index';

function App() {

    return (
        <AuthProvider>
            <Index />
        </AuthProvider>
    );
}

export default App;
