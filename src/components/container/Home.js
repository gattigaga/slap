import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import { Helmet } from "react-helmet";
import "typeface-roboto";

import { addProject } from "../../store/actions/projects";
import { addSlide } from "../../store/actions/slides";
import { addContent } from "../../store/actions/contents";
import ProjectListContainer from "./ProjectListContainer";
import Button from "../presentational/Button";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 128px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 96px;
  color: #333;
  margin: 0px;
`;

const Tagline = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #aaa;
  margin-top: 4px;
  margin-bottom: 48px;
`;

const IconAdd = styled(MdAdd)`
  font-size: 20px;
  color: white;
  margin-right: 4px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 24px;
`;

export const Home = ({ createProject }) => (
  <Container>
    <Helmet>
      <title>Slap - Simplify Slides Creation</title>
    </Helmet>
    <Title>Slap</Title>
    <Tagline>Simplify Slides Creation</Tagline>
    <StyledButton
      icon={<IconAdd />}
      caption="Add New Project"
      onClick={createProject}
    />
    <ProjectListContainer />
  </Container>
);

Home.propTypes = {
  createProject: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  createProject: () => {
    const projectID = uuid();
    const projectCode = projectID.split("-")[0];

    const project = {
      id: projectID,
      name: `Presentation-${projectCode}`,
      timestamp: Date.now()
    };

    const slide = {
      id: uuid(),
      projectID
    };

    const content = {
      id: uuid(),
      slideID: slide.id,
      projectID,
      type: "text",
      content: "Hello World",
      position: {
        x: 32,
        y: 64
      }
    };

    dispatch(addProject(project));
    dispatch(addSlide(slide));
    dispatch(addContent(content));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
