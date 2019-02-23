import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingAnim = keyframes`
  0% {
    padding: 3em;
    border-radius: 0%;
    background-color: red;
  }
  50% {
    padding: 6em;
    border-radius: 50%;
    background-color: #0000ff;
  }
  100% {
    padding: 3em;
    border-radius: 0%;
    background-color: #0000ff;
  }
`

const Container = styled.div`
  color: #fff;
  background-color: #000;
  padding: 1em;
  margin: -8px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
`

const Box = styled.div`
  padding: 2em;
  animation: ${LoadingAnim} 2s linear infinite;
  h2 {
    margin-bottom: 0;
  }
`;

class Loading extends React.Component {
  render () {
    return (
      <Container>
        <Box>
          <h2>Just wait a moment.</h2>
          <h2>It's long ?</h2>
          <h2>Sorry for you.</h2>
          <h2>It's probably not my fault.</h2>
        </Box>
      </Container>
    )
  }
}

export default Loading
