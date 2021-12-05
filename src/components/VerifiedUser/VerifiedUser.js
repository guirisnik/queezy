import React from 'react'
import { any } from 'prop-types'
import { Redirect } from '@reach/router'
import firebase from 'src/firebase'

const propTypes = {
  children: any.isRequired,
}

const VerifiedUser = ({ children }) =>
  firebase.auth().currentUser?.emailVerified ? (
    <>{children}</>
  ) : (
    <Redirect noThrow to='/' />
  )

export { VerifiedUser }
