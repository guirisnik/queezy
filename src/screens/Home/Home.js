import React from 'react'
import firebase from 'src/firebase'

const Home = ({ userId }) => (
  <pre>{JSON.stringify(firebase.auth().currentUser, null, 2)}</pre>
)

export { Home }
