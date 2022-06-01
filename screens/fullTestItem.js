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
import Tests from '../models/tests'
import colors from '../constans/colors'

function Example(props) {
  console.log(props)
  if (props.a != '') {
    return (
      <View key={Math.random()}>
        <Text style={styles.variantTitle}>{props.text}</Text>
        <View style={styles.variantBlock}></View>
        <TouchableOpacity>
          <View style={styles.variant}>
            <Text style={styles.variantText}>{props.a}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.variant}>
            <Text style={styles.variantText}>{props.b}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.variant}>
            <Text style={styles.variantText}>{props.c}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.variant}>
            <Text style={styles.variantText}>{props.d}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default function FullTestItem(props) {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../img/FrameGreen.jpg')}
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
            text={item.text}
            a={item.a}
            b={item.b}
            c={item.c}
            d={item.d}
            answer={item.answer}
            key={Math.random()}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
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
  variantTitle: {
    fontSize: 20,
    margin: 5,
  },
  variantBlock: {
    margin: 5,
  },
  variant: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#444',
    borderStyle: 'solid',
    borderRadius: 5,
    width: '90%',
    margin: 1,
    backgroundColor: '#fefefe',
  },
  variantText: {},
})
