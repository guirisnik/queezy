import React from 'react'
import firebase from 'src/firebase'
import { Layout } from 'components/Layout'

const Home = () => (
  <Layout>
    <pre>{JSON.stringify(firebase.auth().currentUser, null, 2)}</pre>
  </Layout>
)

export { Home }
