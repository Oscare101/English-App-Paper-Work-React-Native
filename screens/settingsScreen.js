import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Linking,
  Share,
} from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import colors from '../constans/colors'

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'Easy English | it will be link :)',
    })
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message)
  }
}

export default function SettingsScreen() {
  const [isDark, setIsDark] = useState(false)

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.card}>
          <View style={styles.settingsItem}>
            <Text style={styles.settingText}>Dark Theme</Text>
            <TouchableOpacity
              onPress={() => setIsDark(!isDark)}
              activeOpacity={1}
            >
              <View
                style={[
                  styles.switch,
                  isDark
                    ? { justifyContent: 'flex-end' }
                    : { justifyContent: 'flex-start' },
                ]}
              >
                <View style={styles.switchItem}>
                  <Ionicons
                    name={isDark ? 'moon-outline' : 'sunny-outline'}
                    size={18}
                    color="#888"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.settingsItem}>
            <Text style={styles.settingText}>Text Size</Text>
          </View>
        </View>
        <Text style={styles.title}>Sources</Text>
        <View style={styles.card}>
          <Text style={{ fontSize: 16 }}>
            &bull; Grammarway - Jenny Dooley, Virginia Evans {'\n'}
            &bull; Oxford Practice Grammar Advanced - George Yule {'\n'}
            &bull; English File - Christian Latham-Koening {'\n'}
          </Text>
        </View>
        <Text style={styles.title}>Contact me</Text>
        <View style={styles.card}>
          <Text style={{ fontSize: 16 }}>
            Hi, I am Kyryll, the developer of this application. {'\n'}I'm still
            a student and I wrote this app for practice, but I hope it helps
            you.
            {'\n'}You can write to me if you see mistakes or if you want to
            suggest something new. {'\n'}Thanks for using it :)
          </Text>
          <View style={styles.link}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('mailto:kirillfedortsev2000@gmail.com')
              }
            >
              <Ionicons name="mail-outline" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.instagram.com/invites/contact/?i=9brm44l27rzc&utm_content=1indt8q'
                )
              }
            >
              <Ionicons name="logo-instagram" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/Oscare101')}
            >
              <Ionicons name="logo-github" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://t.me/funny_like_panda')}
            >
              <FontAwesome5 name="telegram-plane" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 16 }}>
            If you like this app you can propose it to your friends:)
          </Text>

          <TouchableOpacity onPress={onShare} style={styles.share}>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    width: '95%',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingText: { fontSize: 18 },
  switch: {
    width: 50,
    height: 30,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#888',
  },
  switchItem: {
    width: 25,
    height: 26,
    backgroundColor: '#fff',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingVertical: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  share: {
    backgroundColor: '#425882',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  shareText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
})
