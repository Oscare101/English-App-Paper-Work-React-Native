import React, { useState, useEffect } from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import colors from '../constans/colors'

export default function ProfileScreen(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isUser, setIsUser] = useState(true)
  const [isEditName, setIsEditName] = useState(false)
  const [userPoint, setUserPoint] = useState('0')

  //

  const [user, setUser] = useState()

  const SetUserName = async () => {
    await setDoc(doc(db, 'names', auth.currentUser.email), {
      'user-name': name,
      'user-email': auth.currentUser.email,
    })
  }
  const SetFirstData = async () => {
    await setDoc(doc(db, 'names', auth.currentUser.email), {
      'user-name': '',
      'user-email': auth.currentUser.email,
    })
  }

  const GetData = async () => {
    const userCol = collection(db, 'names')
    const userSnapshot = await getDocs(userCol)
    const userList = userSnapshot.docs.map((doc) => doc.data())

    userList.map((item) => {
      if (item['user-email'] == auth.currentUser.email) {
        console.log(item)
        setName(item['user-name'])
      }
    })
  }

  function Register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((re) => {
        setIsSignedIn(true)
        setEmail(email)
        setName('')
        SetFirstData()
        GetData()
      })
      .catch((err) => console.log(err))
  }

  function SignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((re) => {
        setIsSignedIn(true)
        setUser(email)
        GetData()
      })
      .catch((err) => console.log(err))
  }

  function SingOut() {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false)
        setEmail('')
        setPassword('')
      })
      .catch((err) => console.log(err))
  }

  const profileBlock = (
    <>
      <View style={styles.profileBlockRow}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.image}>
            <Image
              source={{
                uri: 'https://cdnb.artstation.com/p/assets/covers/images/030/571/803/large/hossein-diba-11.jpg?1600990935',
              }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.profileBlockCol}>
            {isEditName ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsEditName(false)
                    SetUserName()
                  }}
                >
                  <Ionicons
                    name="ios-checkbox-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TextInput
                  style={{
                    width: 150,
                    fontSize: 20,
                    borderBottomWidth: 1,
                    borderColor: colors.blue,
                    padding: 0,
                  }}
                  placeholder="name"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setIsEditName(true)}>
                  <AntDesign name="edit" size={20} color="#444" />
                </TouchableOpacity>
                <Text style={styles.name}>{name}</Text>
              </View>
            )}

            <Text style={{ fontSize: 10 }}>{user}</Text>
            <Text style={styles.level}>Level: Intermediate</Text>
          </View>
        </View>

        <View style={styles.complete}>
          <Text style={styles.completeText}>{userPoint}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
        }}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: '#425882', padding: 5, width: '49%' },
          ]}
        >
          <TouchableOpacity onPress={SingOut}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>
              LOG OUT
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.card,
            { backgroundColor: '#3c4043', padding: 5, width: '49%' },
          ]}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>
              EDIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}></View>
    </>
  )

  const register = (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
          textContentType="emailAddress"
          autoComplete="email"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
          secureTextEntry
        />
        <View style={styles.inputButton}>
          <TouchableOpacity onPress={Register} style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ fontSize: 18 }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => setIsUser(true)}>
              <Text
                style={{ color: colors.blue, paddingLeft: 5, fontSize: 18 }}
              >
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

  const login = (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
          textContentType="emailAddress"
          autoComplete="email"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
          secureTextEntry
        />
        <View style={styles.inputButton}>
          <TouchableOpacity onPress={SignIn} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => setIsUser(false)}>
              <Text
                style={{ color: colors.blue, paddingLeft: 5, fontSize: 18 }}
              >
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

  const content = isSignedIn ? profileBlock : isUser ? login : register

  return <View style={styles.screen}>{content}</View>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    margin: 10,
    marginRight: 20,
  },
  profileBlockRow: {
    width: '95%',
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileBlockCol: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
  },
  level: {
    color: '#444',
  },
  complete: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: colors.green,
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeText: {
    color: colors.green,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: '95%',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },

  //

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    elevation: 5,
  },
  inputButton: { width: '100%' },
  button: {
    width: '100%',
    backgroundColor: '#425882',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})
