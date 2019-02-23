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

// var code = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.'; var inp = '23\n'; var out = '';
// var codeSize = code.length; var i = 0, ip = 0, cp = 0, dp = 0, m = {};
// var loopIn = {}, loopOut = {}; var tmp = []; for ( var cp = 0; cp < codeSize ; cp++ ) if ( code[cp] == '[' ) tmp.push(cp); else if ( code[cp] == ']' ) loopOut[loopIn[cp] = tmp.pop()] = cp;
// for (var cp = 0; cp < codeSize && i < 100000; cp++, i++) {
//   switch(code[cp]) {
//     case '>': dp++; break;
//     case '<': dp--; break;
//     case '+': m[dp] = ((m[dp]||0)+1)&255; break
//     case '-': m[dp] = ((m[dp]||0)-1)&255; break;
//     case '.': out += String.fromCharCode(m[dp]); break;
//     case ',': m[dp] = inp.charCodeAt(ip++)||0; break;
//     case '[': m[dp]||(cp=loopOut[cp]); break;
//     case ']': cp = loopIn[cp]-1; break;
//   }
// } console.log(out);
