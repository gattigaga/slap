import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeProject } from "../../store/actions/projects";
import { removeSlide } from "../../store/actions/slides";
import { removeContent } from "../../store/actions/contents";
import { setActiveProjectID } from "../../store/actions/activeProjectID";
import { setActiveSlideID } from "../../store/actions/activeSlideID";
import ProjectList from "../presentational/ProjectList";

export const ProjectListContainer = ({ items, onClick, onClickDelete }) => (
  <ProjectList items={items} onClick={onClick} onClickDelete={onClickDelete} />
);

ProjectListContainer.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func
};

const mapStateToProps = ({ projects, slides, contents }) => {
  const by = (attr, id) => item => item[attr] === id;

  const items = projects.map(project => {
    const slide = slides.find(by("projectID", project.id));
    const slideContents = contents.filter(by("slideID", slide.id));

    return {
      ...project,
      contents: slideContents
    };
  });

  return { items, slides, contents };
};

const mapDispatchToProps = dispatch => ({
  openProject: slides => project => {
    dispatch(setActiveProjectID(project.id));
    dispatch(setActiveSlideID(slides[0].id));
  },
  deleteProject: (slides, contents) => project => {
    const call = command => item => dispatch(command(item.id));
    const byProjectID = item => item.projectID === project.id;

    dispatch(setActiveProjectID(null));
    dispatch(setActiveSlideID(null));
    dispatch(removeProject(project.id));
    slides.filter(byProjectID).forEach(call(removeSlide));
    contents.filter(byProjectID).forEach(call(removeContent));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { items, slides, contents } = stateProps;
  const { deleteProject, openProject } = dispatchProps;

  return {
    ...ownProps,
    ...dispatchProps,
    items,
    onClick: openProject(slides, contents),
    onClickDelete: deleteProject(slides, contents)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ProjectListContainer);
