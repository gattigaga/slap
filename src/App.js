import React from "react";
import styled from "styled-components";

import Home from "./components/container/Home";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => (
  <Container>
    <Home />
  </Container>
);

export default App;
