import React, { useState, useEffect } from 'react'
import { Table } from 'bumbag'
import { Modal } from 'bumbag'
import { Group, Button } from 'bumbag'
import { MainContainer } from './quizzes.style'
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
        setQuizzes(
          querySnapshot.docs.map(doc => ({ data: doc.data(), ref: doc.ref }))
        )
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
  const toTableRow = ({ data: { title, questions, createdAt }, ref }) => (
    <Row>
      <Cell>{title}</Cell>
      <Cell>{questions.length}</Cell>
      <Cell>{dateParser(createdAt)}</Cell>
      <Cell>
        <Group>
          <Button variant='outlined' palette='secondary'>
            Edit
          </Button>
          <Button variant='outlined' palette='danger' onClick={ref.delete}>
            Delete
          </Button>
        </Group>
      </Cell>
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
            <HeadCell>Controls</HeadCell>
          </Row>
        </Head>
        <Body>
          {quizzes
            .map(parseCreatedAtToDate)
            .sort(sortDescendingByDate)
            .map(toTableRow)}
        </Body>
      </Table>
      <pre>{JSON.stringify(quizzes, null, 2)}</pre>
    </MainContainer>
  )
}

export { Quizzes }
