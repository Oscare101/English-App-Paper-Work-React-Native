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
import Leason from '../models/leasons'
import colors from '../constans/colors'

function Example(props) {
  return (
    <View
      key={Math.random()}
      style={{
        borderLeftWidth: 5,
        borderColor: colors[props.color],
        margin: 5,
        paddingHorizontal: 5,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: colors[props.color],
          textTransform: 'uppercase',
          letterSpacing: 2,
        }}
      >
        {props.title}
      </Text>
      <Text style={{ fontSize: 16 }}>{props.text}</Text>
    </View>
  )
}

export default function FullLessonScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <ImageBackground
          source={
            props.imageUrl
              ? { uri: props.imageUrl }
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
        {props.route.params.text1.map((item) => (
          <Example color={item.color} title={item.title} text={item.text} />
        ))}
      </View>
    </ScrollView>
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
})
