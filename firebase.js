// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCy7DyTX5vlSGjIYzTJE5VLbjnj_h1JIB4',
  authDomain: 'rn-first-try-server.firebaseapp.com',
  databaseURL: 'https://rn-first-try-server-default-rtdb.firebaseio.com',
  projectId: 'rn-first-try-server',
  storageBucket: 'rn-first-try-server.appspot.com',
  messagingSenderId: '884638807290',
  appId: '1:884638807290:web:d1ab5d0d74f855d0804543',
  measurementId: 'G-KPZ40LDTSG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
