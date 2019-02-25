import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import WorksList from 'Components/WorksList'
import ProjectList from 'Components/ProjectList'

import listOfWorks from 'Assets/listOfWorks'

const Container = styled.div`
  padding: 1em;
  a {
    text-decoration: none;
    font-family: monospace;
    transition: 100ms all;
    &:hover {
      letter-spacing: 2px;
    }
  }
`;

const LinkS = styled(Link)`
  display: inline-block;
  font-size: 1.2em;
  color: #fff;
  margin-top: 2em;
  border-bottom: 2px solid red;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2em;
  color: #fff;
`;

const Split = styled.div`
  display: flex;
  flex-direction: row;
`;

class Works extends React.Component {
  render() {
    return (
      <Container>
        <LinkS to="/">{'< return'}</LinkS>
        <Title>works</Title>
        <Split>
          <WorksList data={listOfWorks} />
        </Split>
      </Container>
    )
  }
}

export default Works
