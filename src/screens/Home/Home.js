import React from 'react'
import firebase from 'src/firebase'
import { Layout } from 'components/Layout'
import { Heading, Paragraph } from 'bumbag'

const Home = () => {
  const user = firebase.auth().currentUser
  const isVerified = user.emailVerified

  return (
    <Layout>
      {isVerified ? (
        <>
          <Heading>Welcome, {user?.displayName}!</Heading>
          <pre>{JSON.stringify(user.email, null, 2)}</pre>
        </>
      ) : (
        <>
          <Heading>User not yet verified!</Heading>
          <Paragraph>
            Please verify your account by clicking on the link provided in the
            email from Queezy!
          </Paragraph>
        </>
      )}
    </Layout>
  )
}

export { Home }
