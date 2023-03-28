// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useAuth } from './contexts/AuthContext';

// import Loader from './views/components/Loader'
// import RegistrationScreen from './views/screens/RegistrationScreen';
// import LoginScreen from './views/screens/LoginScreen';
// import HomeScreen from './views/screens/HomeScreen';
// import ResetPasswordScreen from './views/screens/ResetPasswordScreen';
// import ForgotPasswordScreen from './views/screens/ForgotPasswordScreen';

// const Stack = createNativeStackNavigator();

// export default function Auth() {

//     const [initialRouteName, setInitialRouteName] = React.useState('');

//     const { currentUser } = useAuth();

//     React.useEffect(() => {
//         // console.log(currentUser == undefined)
//         authUser();
//     }, []);

//     const authUser = async () => {
//         try {
//             if (currentUser) {
//                 setInitialRouteName('HomeScreen');
//             } else {
//                 setInitialRouteName('LoginScreen');
//             }
//         } catch (error) {
//             setInitialRouteName('RegistrationScreen');
//         }
//     };


//     return (
//         <NavigationContainer>
//             {!initialRouteName ? (
//                 <Loader visible={true} />
//             ) : (
//                 <>
//                     <Stack.Navigator
//                         initialRouteName={initialRouteName}
//                         screenOptions={{ headerShown: false }}>
//                         <Stack.Screen
//                             name="RegistrationScreen"
//                             component={RegistrationScreen}
//                         />
//                         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//                         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//                         <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
//                         <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
//                     </Stack.Navigator>
//                 </>
//             )}
//         </NavigationContainer>
//     )
// }