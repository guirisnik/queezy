import React from 'react'
import { useFormik } from 'formik'
import { navigate } from '@reach/router'
import { Button, InputField, Set, useToasts } from 'bumbag'
import { Trash } from 'src/components/Icons'
import { NewQuestion } from './NewQuestion.template'
import { Form, MainContainer, QuestionContainer } from './quizFactory.style'
import firebase from 'src/firebase'

const defaultQuestion = {
  title: '',
  alternatives: ['', '', ''],
}

const QuizFactory = () => {
  const toasts = useToasts()

  const successToast = () =>
    toasts.success({
      title: 'Success',
      message: 'Quiz saved successfully!',
    })

  const failureToast = () =>
    toasts.danger({
      title: 'Error',
      message: 'Something wrong happened. Try again later.',
    })

  const onSubmit = values =>
    firebase
      .firestore()
      .collection('Quiz')
      .add({ ...values, createdAt: Date() })
      .then(successToast)
      .catch(failureToast)

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
      ownerId: firebase.auth().currentUser?.uid,
    },
    onSubmit,
  })

  const addQuestion = () =>
    setValues(v => ({
      ...v,
      questions: [...values.questions, defaultQuestion],
    }))

  const removeQuestionFactory = questionIndex => {
    return () => {
      setValues(v => ({
        ...v,
        questions: [
          ...v.questions.slice(0, questionIndex),
          ...v.questions.slice(questionIndex + 1),
        ],
      }))
    }
  }

  const removeAlternativeFactory = (questionIndex, alternativeIndex) => {
    return () => {
      setValues(v => ({
        ...v,
        questions: [
          ...v.questions.slice(0, questionIndex),
          {
            ...v.questions[questionIndex],
            alternatives: [
              ...v.questions[questionIndex].alternatives.slice(
                0,
                alternativeIndex
              ),
              ...v.questions[questionIndex].alternatives.slice(
                alternativeIndex + 1
              ),
            ],
          },
          ...v.questions.slice(questionIndex + 1),
        ],
      }))
    }
  }

  const addAlternativeFactory = questionIndex => {
    return () => {
      setValues(v => ({
        ...v,
        questions: [
          ...v.questions.slice(0, questionIndex),
          {
            ...v.questions[questionIndex],
            alternatives: v.questions[questionIndex].alternatives.concat(''),
          },
          ...v.questions.slice(questionIndex + 1),
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
            <NewQuestion
              index={i}
              {...q}
              handleChange={handleChange}
              handleBlur={handleBlur}
              addAlternativeFactory={addAlternativeFactory}
              removeAlternativeFactory={removeAlternativeFactory}
            />
          </QuestionContainer>
        ))}
        <Set marginTop='13px'>
          <Button
            disabled={isSubmitting}
            palette='secondary'
            variant='outlined'
            onClick={addQuestion}
          >
            Add question
          </Button>
          <Button
            isLoading={isSubmitting}
            palette='primary'
            variant='outlined'
            type='submit'
          >
            Submit
          </Button>
        </Set>
      </Form>
    </MainContainer>
  )
}

export { QuizFactory }
