// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAUC8j5hSewO8MxJ0WlwGLNbHCIRgvznDI',
  authDomain: 'rn-ea-app.firebaseapp.com',
  projectId: 'rn-ea-app',
  storageBucket: 'rn-ea-app.appspot.com',
  messagingSenderId: '1097167151956',
  appId: '1:1097167151956:web:f4498787098aa776d8dec1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
