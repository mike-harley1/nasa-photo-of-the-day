import React from "react";
import "./App.css";
import DataCall from './Components/DataCall'

import Styled from 'styled-components'

const Htitle = Styled.div 

`
background-color:orange;
color:white;
font-size:60px;
`
const Container = Styled.div
   `
   background-color: royalblue;
  `


function App() {
  return (
    <Container className="App">
     <Htitle>Nasa Photo Of The Day</Htitle>
      <DataCall/>
    </Container>
  );
}

export default App;