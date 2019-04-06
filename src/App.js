import React, { Component } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
`;

const Input = styled.input.attrs({
  required: true,
})`
  border-radius: 5px;
  border: 0;
  ${awesomeCard}
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Input placeholder="hello" />
        </Container>
      </React.Fragment> 
    );
  }
}

const Container = styled.div`
  background-color: #dedede;
  height: 100vh;
`;

export default App;
