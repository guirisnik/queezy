import React, { useState, useEffect } from 'react'
import { any } from 'prop-types'
import { navigate } from '@reach/router'
import { Spinner } from 'bumbag'
import firebase from 'src/firebase'
import styled from '@emotion/styled'

const propTypes = {
  children: any.isRequired,
}

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const auth = firebase.auth()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setIsLoggedIn(true)
      else navigate('/login')
    })
  }, [])

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <SpinnerContainer>
      <Spinner size='large' />
    </SpinnerContainer>
  )
}

export { PrivateRoute }
