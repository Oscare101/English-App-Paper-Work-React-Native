import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native'

import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite'

import { FontAwesome } from '@expo/vector-icons'

function WithEmail() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [chattingList, setChatList] = useState([])

  const [seeChat, setSeeChat] = useState(false)

  const GetData = async () => {
    const chatCol = collection(db, 'chat')
    const chatSnapshot = await getDocs(chatCol)
    const chatList = chatSnapshot.docs.map((doc) => doc.data())
    setChatList([])
    chatList.map((item) => {
      setChatList((current) => [...current, item])
    })
  }

  const GetName = async () => {
    const nameCol = collection(db, 'names')
    const nameSnapshot = await getDocs(nameCol)
    const nameList = nameSnapshot.docs.map((doc) => doc.data())
    nameList.map((item) => {
      if (item['user-email'] == auth.currentUser.email) {
        setName(item['user-name'])
      }
    })
  }

  const SendMessage = async () => {
    await setDoc(doc(db, 'chat', new Date().toLocaleString()), {
      name: name,
      email: auth.currentUser.email,
      message: message,
      time: new Date().toLocaleString(),
    })
    GetData()
    setMessage('')
  }

  function RenderChat({ item }) {
    GetData()

    return (
      <View
        style={
          item['email'] == auth.currentUser.email
            ? styles.messageRight
            : styles.messageLeft
        }
      >
        <Text style={styles.name}>{item['name']}</Text>
        <Text style={styles.messageText}>{item['message']}</Text>
      </View>
    )
  }

  useEffect(() => {
    GetName()
  }, [])

  let content = (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hi, please be polite in the global chat</Text>
      <TouchableOpacity
        onPress={() => {
          setSeeChat(true)
          GetData()
        }}
      >
        <Text>Open Chat</Text>
      </TouchableOpacity>
    </View>
  )

  if (seeChat) {
    content = (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <FlatList
          keyExtractor={(item) => item.time}
          data={chattingList}
          renderItem={RenderChat}
          style={{ width: '100%' }}
        />
        <View style={styles.inputBlock}>
          <TextInput
            placeholder="message"
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.input}
            multiline
          />
          <TouchableOpacity onPress={SendMessage}>
            <FontAwesome name="send-o" size={24} color="#425882" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return <View style={{ flex: 1 }}>{content}</View>
}

function WithOutEmail() {
  return (
    <View>
      <Text>No Email</Text>
    </View>
  )
}

export default function ChatScreen() {
  const content =
    auth.currentUser == undefined ? <WithOutEmail /> : <WithEmail />
  return <>{content}</>
}

const styles = StyleSheet.create({
  inputBlock: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    height: 100,
    padding: 2,
    borderRadius: 10,
  },
  messageLeft: {
    width: '80%',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    margin: 5,
    padding: 5,
    borderBottomLeftRadius: 0,
  },
  messageRight: {
    width: '80%',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    margin: 5,
    padding: 5,
    borderBottomRightRadius: 0,
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#888',
  },
  messageText: {
    fontSize: 16,
  },
})
