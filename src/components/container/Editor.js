import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import "typeface-roboto";

import HeaderContainer from "./HeaderContainer";
import SlideListContainer from "./SlideListContainer";
import ToolbarContainer from "./ToolbarContainer";
import MainSlideContainer from "./MainSlideContainer";
import { removeContent } from "../../store/actions/contents";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  outline: none;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  background: #eee;
`;

export const Editor = ({ name, deleteContent }) => (
  <Container tabIndex={0} onKeyPress={deleteContent}>
    <Helmet>
      <title>{name} - Slap</title>
    </Helmet>
    <HeaderContainer />
    <ToolbarContainer />
    <Wrapper>
      <SlideListContainer />
      <MainSlideContainer />
    </Wrapper>
  </Container>
);

Editor.propTypes = {
  name: PropTypes.string,
  deleteContent: PropTypes.func
};

const mapStateToProps = ({ projects, activeProjectID, activeContentID }) => {
  const project = projects.find(project => project.id === activeProjectID);

  return {
    activeContentID,
    name: project.name
  };
};

const mapDispatchToProps = dispatch => ({
  deleteContent: contentID => {
    dispatch(removeContent(contentID));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { name, activeContentID } = stateProps;
  const { deleteContent } = dispatchProps;

  return {
    ...ownProps,
    name,
    deleteContent: event => {
      if (event.key !== "Delete") return;
      deleteContent(activeContentID);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Editor);
