import React from 'react'
import { useFormik } from 'formik'
import { Question } from 'components/Question'
import { MainContainer } from './quiz.style'

const Quiz = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      q1: '',
      q2: '',
    },
    onSubmit: values => console.log(values),
  })
  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <Question
          name='q1'
          title='How much is 1 + 2?'
          alternatives={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.q1}
        />
        <Question
          name='q2'
          title='How much is 2 + 2?'
          alternatives={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.q2}
        />
        <button type='submit'>Submit</button>
      </form>
    </MainContainer>
  )
}

export { Quiz }
