import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import TestItem from '../components/testItem'

import { TESTS } from '../Data/data'

import FullTestItem from './fullTestItem'

function TestsFirstScreen(props) {
  function renderItem({ item }) {
    return (
      <TestItem
        id={item.id}
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        onTestClick={() => {
          props.navigation.navigate('fullTestItem', {
            id: item.id,
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            text1: item.text1,
          })
        }}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.titleView}>
        <View style={styles.blackLine} />
        <Text style={styles.titleText}>TESTS</Text>
        <View style={styles.blackLine} />
      </View>

      <FlatList
        numColumns={2}
        data={TESTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const Stack = createStackNavigator()

export default function TestScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={TestsFirstScreen} />
      <Stack.Screen name="fullTestItem" component={FullTestItem} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  blackLine: { height: 2, width: '20%', backgroundColor: '#000' },
  titleText: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
})
