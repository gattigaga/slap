import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "./components/container/Home";
import Editor from "./components/container/Editor";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const App = ({ activeProjectID }) => (
  <Container>{activeProjectID ? <Editor /> : <Header />}</Container>
);

App.propTypes = {
  activeProjectID: PropTypes.string
};

const mapStateToProps = ({ activeProjectID }) => ({ activeProjectID });

export default connect(mapStateToProps)(App);
