// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB1r3gt3ucMja5BKIQh_8FHdysFIO0l8Bc',
  authDomain: 'housemarketplace-b5331.firebaseapp.com',
  projectId: 'housemarketplace-b5331',
  storageBucket: 'housemarketplace-b5331.appspot.com',
  messagingSenderId: '402333110347',
  appId: '1:402333110347:web:96be054e89b0fb219dfdce',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
