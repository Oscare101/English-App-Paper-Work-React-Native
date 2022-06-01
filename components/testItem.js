import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native'

const width = Dimensions.get('screen').width

export default function TestItem(props) {
  return (
    <TouchableOpacity
      style={{ elevation: 10 }}
      activeOpacity={0.8}
      onPress={props.onTestClick}
    >
      <View style={styles.block}>
        <View
          style={{
            height: '80%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageBackground
            resizeMode="cover"
            source={require('../img/FrameGreen.jpg')}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.title}>{props.title}</Text>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}
        >
          <Text>{props.duration}m</Text>
          <Text>{props.complexity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  block: {
    width: width * 0.46,
    height: 100,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
})
