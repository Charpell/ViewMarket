import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

console.disableYelloBox = true


export default function App() {
 
  

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
