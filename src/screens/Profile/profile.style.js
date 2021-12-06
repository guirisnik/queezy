import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  display: grid;
  align-self: center;
  grid-template-rows: repeat(min-content, 3);
  row-gap: 10px;
  align-items: stretch;
  width: 50%;
`
