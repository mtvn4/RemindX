import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const Stack=createNativeStackNavigator();
const App = () => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
          <Stack.Screen name="login" component={LoginPage}/>
          <Stack.Screen name="home" component={HomePage}/>
        </Stack.Navigator>
    </NavigationContainer>
      
  

  )
}

export default App