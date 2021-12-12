import React, { useState, useEffect } from 'react'
import { Table } from 'bumbag'
import { MainContainer } from './quizzes.style'
import 'utils/Array.extensions'
import firebase from 'src/firebase'

const { Head, Row, HeadCell, Body, Cell } = Table

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])

  function fetchAllQuizByOwnerId() {
    firebase
      .firestore()
      .collection('Quiz')
      .where('ownerId', '==', firebase.auth().currentUser.uid)
      .get()
      .then(querySnapshot =>
        setQuizzes(querySnapshot.docs.map(doc => doc.data()))
      )
      .catch(console.error)
  }

  useEffect(fetchAllQuizByOwnerId, [])

  const dateParser = (
    createdAt = 'Sat Dec 11 2021 23:21:04 GMT-0300 (Brasilia Standard Time)'
  ) => new Date(createdAt).toLocaleDateString()

  const parseCreatedAtToDate = quiz => ({
    ...quiz,
    createdAt: new Date(quiz.createdAt),
  })
  const sortDescendingByDate = (a, b) => b.createdAt - a.createdAt
  const toTableRow = quiz => (
    <Row>
      <Cell>{quiz.title}</Cell>
      <Cell>{quiz.questions.length}</Cell>
      <Cell>{dateParser(quiz.createdAt)}</Cell>
    </Row>
  )

  return (
    <MainContainer>
      <Table isHoverable>
        <Head>
          <Row>
            <HeadCell>Name</HeadCell>
            <HeadCell>Questions</HeadCell>
            <HeadCell>Created At</HeadCell>
          </Row>
        </Head>
        <Body>
          {quizzes
            .map(parseCreatedAtToDate)
            .sort(sortDescendingByDate)
            .map(toTableRow)}
        </Body>
      </Table>
    </MainContainer>
  )
}

export { Quizzes }
