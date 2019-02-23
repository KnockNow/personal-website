import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  color: #fff;
  background-color: #000;
  padding: 0 8em;
  margin: -8px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  a {
    color: #fff;
    font-size: 1.4em;
    margin-right: 1em;
    font-weight: 900;
    text-decoration: none;
    transition: 200ms all;
    &:hover {
      letter-spacing: 4px;
    }
  }
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 1.4em;
`;

const Content = styled.div`
  padding: 0 3em;
  p {
    margin-top: 1em;
    font-size: 1.6em;
    font-weight: 500;
  }
`;

class How extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Link to="/">{'[<]'}</Link>
          <Title>How</Title>
        </Header>
        <Content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ante enim. Suspendisse nec odio dolor. Maecenas efficitur eros ante, quis viverra ex pulvinar eget. Fusce sit amet consectetur lectus. Ut luctus erat orci, nec dictum felis vulputate ut. Sed rhoncus nisi id neque euismod, eu pellentesque nunc varius. Fusce in ipsum sollicitudin, blandit ex nec, rhoncus felis. Ut id ipsum auctor, consectetur enim id, mattis lacus. Quisque faucibus libero dolor, a maximus nulla imperdiet posuere. Nullam sit amet sagittis eros, in mollis arcu. Aliquam erat volutpat. Praesent eget nibh eu tortor porta eleifend. Mauris sed eros est. Suspendisse eu metus massa. Aenean lobortis finibus est, nec fermentum tortor feugiat ac.</p>
        </Content>
      </Container>
    )
  }
}

export default How
