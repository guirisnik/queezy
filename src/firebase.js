import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyARwOq1uTnifjhTkTC5pHjXWhSu4YY8oBw',
  authDomain: 'queezy-89549.firebaseapp.com',
  projectId: 'queezy-89549',
  storageBucket: 'queezy-89549.appspot.com',
  databaseURL: 'https://queezy.firebaseio.com',
  messagingSenderId: '599365589964',
  appId: '1:599365589964:web:6fecb0d887389f39db5b69',
  measurementId: 'G-56BL1X81WW',
}

firebase.initializeApp(firebaseConfig)

export default firebase
