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
  margin-bottom: 3em;
`;

const RowContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  a {
    color: red;
    font-size: 1.3em;
    margin-right: 1em;
    display: block;
  }
  h3 {
    font-size: 1.5em;
    /* color: blue; */
    display: block;
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <LinkS to="/">{'< return'}</LinkS>
        <Title>contact</Title>
        <RowContact>
          <h3>william.heliejoly@gmail.com</h3>
        </RowContact>
        <RowContact>
          <a target="_blank" href="https://www.linkedin.com/in/williamheliejoly">[ linkedin ]</a>
        </RowContact>
      </Container>
    )
  }
}

export default Contact
