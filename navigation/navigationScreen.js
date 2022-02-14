import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ProfileScreen from '../screens/profileScreen'
import TheoryLessonsScreen from '../screens/theoryLessonsScreen'
import TheorySavedScreen from '../screens/theorySavedScreen'

const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()

function ProfileNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Your Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function ThoryNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Book" component={TheoryLessonsScreen} />
      <Tab.Screen name="Saved" component={TheorySavedScreen} />
    </Tab.Navigator>
  )
}

export default function NavigationScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileNavigation} />
      <Drawer.Screen name="Theory" component={ThoryNavigation} />
    </Drawer.Navigator>
  )
}
