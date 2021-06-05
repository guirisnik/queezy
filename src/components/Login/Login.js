import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { InputField, Button, Alert } from 'bumbag'
import { useFormik } from 'formik'
import firebase from 'src/firebase'
import { Form } from './login.style'

const Login = () => {
  const [error, setError] = useState(null)

  const navigateToHome = () => navigate('/home')

  const triggerAlertWithCountdown = (error = { message: 'Unknown error' }) => {
    setError(error?.message)
    setTimeout(() => setError(null), 5_000)
  }

  const onSubmit = ({ email, password }) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(navigateToHome)
      .catch(triggerAlertWithCountdown)

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
