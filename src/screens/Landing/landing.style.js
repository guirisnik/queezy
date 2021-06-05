import styled from '@emotion/styled'

export const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`

export const LogoContainer = styled.div`
  background-color: #cecece;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
`

export const FormContainer = styled.div`
  margin-top: 20px;
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  padding: 20px;
  border: 1px solid #cecece;
  border-radius: 13px;
`
