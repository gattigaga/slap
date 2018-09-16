import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "typeface-roboto";

import { updateProject } from "../../store/actions/projects";
import { setActiveProjectID } from "../../store/actions/activeProjectID";
import { setActiveSlideID } from "../../store/actions/activeSlideID";
import { setActiveContentID } from "../../store/actions/activeContentID";
import Header from "../presentational/Header";

export const HeaderContainer = ({
  name,
  onClickPlay,
  onClickClose,
  onChangeName
}) => (
  <Header
    name={name}
    onClickPlay={onClickPlay}
    onClickClose={onClickClose}
    onChangeName={onChangeName}
  />
);

HeaderContainer.propTypes = {
  name: PropTypes.string,
  onClickClose: PropTypes.func,
  onClickPlay: PropTypes.func,
  onChangeName: PropTypes.func
};

const mapStateToProps = ({ projects, activeProjectID }) => {
  const project = projects.find(project => project.id === activeProjectID);

  return {
    activeProjectID,
    name: project.name
  };
};

const mapDispatchToProps = dispatch => ({
  onClickPlay: projectID => {
    const data = { isPlayed: true };

    dispatch(updateProject(projectID, data));
  },
  onClickClose: projectID => {
    const data = { isPlayed: false };

    dispatch(setActiveProjectID(null));
    dispatch(setActiveSlideID(null));
    dispatch(setActiveContentID(null));
    dispatch(updateProject(projectID, data));
  },
  onChangeName: projectID => event => {
    const data = { name: event.target.value };

    dispatch(updateProject(projectID, data));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { name, activeProjectID } = stateProps;
  const { onClickPlay, onClickClose, onChangeName } = dispatchProps;

  return {
    ...ownProps,
    ...dispatchProps,
    name,
    onClickPlay: () => onClickPlay(activeProjectID),
    onClickClose: () => onClickClose(activeProjectID),
    onChangeName: onChangeName(activeProjectID)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HeaderContainer);
