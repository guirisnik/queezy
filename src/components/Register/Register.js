import React from 'react'
import { InputField, Button } from 'bumbag'
import { useFormik } from 'formik'
import firebase from 'src/firebase'
import { Form } from './register.style'

const Register = () => {
  const onSubmit = ({ email, password }) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(console.log)
      .catch(console.error)
  }

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
      <Button isLoading={isSubmitting} type='submit'>
        Register
      </Button>
    </Form>
  )
}

export { Register }
