import React from 'react'
import { Text, View } from 'react-native'
import NavigationScreen from './navigation/navigationScreen'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  )
}
