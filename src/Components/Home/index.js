import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const StarterAnimation = keyframes`
  0% {
    top: 0%;
    width: 0%;
    background-color: red;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 34%;
    width: 94%
    background-color: #0000ff;
  }
`


const StartAnimText = keyframes`
  0% {
    color: #000;
  }
  100% {
    color: #fff;
  }
`

const Container = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Title = styled.div`
  position: relative;
  padding: 1em;
`

const Text = styled.span`
  font-size: 8em;
  font-weight: 900;
  position: relative;
`

const Bar = styled.div`
  content: '';
  position: absolute;
  top: 34%;
  width: 95%;
  height: 1.5em;
  background-color: #0000ff;
  animation: ${StarterAnimation} 1s linear;
`

const SubTitle = styled.h1`
  width: 100%;
  font-size: 2.5em;
  font-weight: 900;
  margin-top: 0;
  animation: ${StartAnimText} 1.5s linear;
`

const Menu = styled.div`
  display: flex;
  font-family: monospace;

  a {
    padding: 1em;
    font-size: 1.8em;
    text-decoration: none;
    color: #fff;
    transition: 200ms all;
    &:hover {
      color: #0000ff;
    }
  }
`

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          <Bar />
          <Text>Think Code.</Text>
          <SubTitle>Helie-joly William</SubTitle>
        </Title>
        <Menu>
          <Link to="/works">works</Link>
        </Menu>
      </Container>
    )
  }
}

export default Home
