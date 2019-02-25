import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import Home from 'Components/Home'
import How from 'Components/How/Loadable'
import Works from 'Components/Works/Loadable'
import Loading from 'Components/LoadingIndicator'

const Container = styled.div`
  font-size: 14px;
  font-family: 'Helvetica';
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/how" component={How} />
          <Route path="/works" component={Works} />
          <Route path="/loading" component={Loading} />
        </Container>
      </Router>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
