import React from 'react'
import { Router } from '@reach/router'
import { Provider as BumbagProvider } from 'bumbag'
import { Layout } from 'components/Layout'
import { PrivateRoute } from 'components/PrivateRoute'
import { VerifiedUser } from 'components/VerifiedUser'
import { Home, Landing, Profile, QuizFactory } from 'src/screens'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Landing path='/login' />
      <Layout path='/'>
        <PrivateRoute path='/'>
          <Home path='/' />
          <VerifiedUser path='/'>
            <Profile path='/profile' />
            <QuizFactory path='/new-quiz' />
          </VerifiedUser>
        </PrivateRoute>
      </Layout>
    </Router>
  </BumbagProvider>
)

export default IndexPage
