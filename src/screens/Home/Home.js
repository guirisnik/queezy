import React from 'react'
import firebase from 'src/firebase'
import { Layout } from 'components/Layout'
import { Heading } from 'bumbag'

const Home = () => (
  <Layout>
    <Heading>Welcome, {firebase.auth().currentUser?.displayName}!</Heading>
  </Layout>
)

export { Home }
