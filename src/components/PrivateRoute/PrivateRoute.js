import React from 'react'
import { any } from 'prop-types'
import { Redirect } from '@reach/router'
import firebase from 'src/firebase'

const propTypes = {
  children: any.isRequired,
}

const PrivateRoute = ({ children }) =>
  firebase.auth().currentUser ? <>{children}</> : <Redirect noThrow to='/' />

export { PrivateRoute }
