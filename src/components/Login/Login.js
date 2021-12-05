import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import { InputField, Checkbox, Button, Alert } from 'bumbag'
import { useFormik } from 'formik'
import firebase from 'src/firebase'
import { Form } from './login.style'

const Login = () => {
  const auth = firebase.auth()
  const [error, setError] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) navigateToHome()
    })
  }, [])

  const navigateToHome = () => navigate('/')

  const triggerAlertWithCountdown = (error = { message: 'Unknown error' }) => {
    setError(error?.message)
    setTimeout(() => setError(null), 5_000)
  }

  const onSubmit = ({ email, password, keepUserLoggedIn }) =>
    auth
      .setPersistence(getAuthPersistence(keepUserLoggedIn))
      .then(() => signIn(email, password))

  const signIn = (email, password) =>
    auth
      .signInWithEmailAndPassword(email, password)
      .then(navigateToHome)
      .catch(triggerAlertWithCountdown)

  const getAuthPersistence = keepUserLoggedIn =>
    keepUserLoggedIn
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION

  const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      keepUserLoggedIn: false,
    },
    onSubmit,
  })

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label='Email'
        name='email'
        placeholder='user@email.com'
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <InputField
        label='Password'
        name='password'
        type='password'
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Checkbox
        name='keepUserLoggedIn'
        value={values.keepUserLoggedIn}
        onBlur={handleBlur}
        onChange={handleChange}
        label='Keep me logged in'
      />
      {error && (
        <Alert title='Login error' type='danger'>
          {error}
        </Alert>
      )}
      <Button isLoading={isSubmitting} type='submit'>
        Login
      </Button>
    </Form>
  )
}

export { Login }
