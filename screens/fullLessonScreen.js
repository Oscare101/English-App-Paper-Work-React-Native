import React from 'react'
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Lesson from '../models/lessons'
import colors from '../constans/colors'

function Example(props) {
  return (
    <View
      key={Math.random()}
      style={[
        props.color
          ? [styles.exampleBlock, { borderColor: colors[props.color] }]
          : styles.exampleBlockNone,
      ]}
    >
      <Text
        style={
          props.title
            ? [
                props.color
                  ? [styles.exampleTitle, { color: colors[props.color] }]
                  : styles.exampleTitleNone,
              ]
            : { height: 0 }
        }
      >
        {props.title}
      </Text>
      <Text style={{ fontSize: 16 }}>{props.text}</Text>
    </View>
  )
}

export default function FullLessonScreen(props) {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={
          props.route.params.imageUrl
            ? { uri: props.route.params.imageUrl }
            : props.route.params.id[0] == 't'
            ? require('../img/FrameGreen.jpg')
            : require('../img/Frame.jpg')
        }
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.back}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <View style={{ width: 24 }} />
      </ImageBackground>
      <ScrollView>
        {props.route.params.text1.map((item) => (
          <Example
            color={item.color}
            title={item.title}
            text={item.text}
            key={Math.random()}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  title: {
    fontSize: 35,
    color: '#fff',
  },
  back: {
    width: 30,
    height: 30,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  exampleBlock: {
    borderLeftWidth: 5,
    margin: 5,
    paddingHorizontal: 5,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  exampleBlockNone: {
    padding: 5,
  },
  exampleTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  exampleTitleNone: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
})
