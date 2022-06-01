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

import LessonItem from '../components/lessonItem'

import { LESSONS } from '../Data/data'

import FullLessonScreen from './fullLessonScreen'

function LessonsFirstScreen(props) {
  function renderItem({ item }) {
    return (
      <LessonItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        onLessonClick={() => {
          props.navigation.navigate('fullLessonScreen', {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
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
        <Text style={styles.titleText}>LESSONS</Text>
        <View style={styles.blackLine} />
      </View>

      <FlatList
        numColumns={2}
        data={LESSONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const Stack = createStackNavigator()

export default function TheoryLessonsScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={LessonsFirstScreen} />
      <Stack.Screen name="fullLessonScreen" component={FullLessonScreen} />
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
