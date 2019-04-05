import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Button>Hello</Button>
          <Button active>Hello</Button>
          <Anchor href="http://google.com">Go to google</Anchor>
        </Container>
      </React.Fragment> 
    );
  }
}

const Container = styled.div`
  
`;

const Button = styled.button`
  color: white;
  font-size: 50px;
  padding: 20px 10px;
  width: 200px;
  border-radius: 15px;
  -webkit-appearance: none;
  cursor: pointer;
  margin-right: 10px;
  &:active, &:focus {
    outline: none;
  }
  background-color: ${props => (props.active ? 'red' : 'green')}
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
