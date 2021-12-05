import styled from '@emotion/styled'

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
`

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #eeebf5;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;
`

export const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
`

export const OptionLabel = styled.div`
  padding: 0 20px;
`
