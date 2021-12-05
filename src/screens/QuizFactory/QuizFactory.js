import { Button, InputField, Set } from 'bumbag'
import { useFormik } from 'formik'
import React from 'react'
import { Trash } from 'src/components/Icons'
import { Question } from './Question.template'
import { Form, MainContainer, QuestionContainer } from './quizFactory.style'
import firebase from 'src/firebase'

const defaultQuestion = {
  title: '',
  alternatives: {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  },
}

const QuizFactory = () => {
  const onSubmit = values =>
    firebase
      .firestore()
      .collection('Quiz')
      .add(values)
      .then(quiz => console.log(`Quiz saved with id: ${quiz.id}`))
      .catch(error =>
        console.error(`An error occurred when saving quiz: ${error}`)
      )

  const {
    values,
    setValues,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: '',
      questions: [defaultQuestion],
    },
    onSubmit,
  })

  const handleAddQuestion = () =>
    setValues(v => ({
      ...v,
      questions: [...values.questions, defaultQuestion],
    }))

  const removeQuestionFactory = index => {
    return () => {
      setValues(v => ({
        ...v,
        questions: [
          ...v.questions.slice(0, index),
          ...v.questions.slice(index + 1),
        ],
      }))
    }
  }

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <InputField
          name='title'
          variant='underline'
          placeholder='Quiz title'
          onChange={handleChange}
          onBlur={handleBlur}
          size='large'
          value={values.title}
        />
        {values.questions.map((q, i) => (
          <QuestionContainer key={i}>
            <Button
              position='absolute'
              top='10px'
              right='10px'
              variant='outlined'
              palette='danger'
              onClick={removeQuestionFactory(i)}
            >
              <Trash />
            </Button>
            <Question
              index={i}
              {...q}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </QuestionContainer>
        ))}
        <Set>
          <Button
            palette='secondary'
            variant='outlined'
            onClick={handleAddQuestion}
          >
            Add question
          </Button>
          <Button palette='primary' variant='outlined' onClick={handleSubmit}>
            Submit
          </Button>
        </Set>
      </Form>
    </MainContainer>
  )
}

export { QuizFactory }
