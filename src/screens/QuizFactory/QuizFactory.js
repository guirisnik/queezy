import { Button, InputField, Set } from 'bumbag'
import { useFormik } from 'formik'
import React from 'react'
import { Trash } from 'src/components/Icons'
import { NewQuestion } from './NewQuestion.template'
import { Form, MainContainer, QuestionContainer } from './quizFactory.style'
import firebase from 'src/firebase'

const defaultQuestion = {
  title: '',
  alternatives: ['', '', ''],
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
            palette='secondary'
            variant='outlined'
            onClick={addQuestion}
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
