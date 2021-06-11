import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'
import { Router, Redirect } from '@reach/router'
import { Landing } from 'screens/Landing'
import { Home } from 'screens/Home'
import { Profile } from 'screens/Profile'
import { PrivateRoute } from 'components/PrivateRoute'
import { VerifiedUser } from 'components/VerifiedUser'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Redirect from='/login' to='/' noThrow />
      <Landing path='/' />
      <PrivateRoute path='/'>
        <Home path='/home' />
        <VerifiedUser path='/'>
          <Profile path='/profile' />
        </VerifiedUser>
      </PrivateRoute>
    </Router>
  </BumbagProvider>
)

export default IndexPage
