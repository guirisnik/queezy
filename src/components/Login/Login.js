import React from 'react'
import { InputField, Button } from 'bumbag'
import { useFormik } from 'formik'
import firebase from 'src/firebase'
import { Form } from './login.style'

const Login = () => {
  const onSubmit = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(console.log)
      .catch(reason => console.info(reason))
  }

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
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
      <Button type='submit'>Login</Button>
    </Form>
  )
}

export { Login }
