import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScree from '../screens/LoginScree'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScree} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator