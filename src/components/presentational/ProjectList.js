import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

import Project from "./Project";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: auto;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Empty = styled.p`
  font-size: 14px;
  font-family: Roboto;
  color: #333;
  margin: 0px;
`;

const ProjectList = ({ className, items, onClick, onClickDelete }) => (
  <Container className={className}>
    {items.length ? (
      items.map(item => (
        <Project
          key={item.id}
          {...item}
          onClick={() => onClick(item)}
          onClickDelete={() => onClickDelete(item)}
        />
      ))
    ) : (
      <Empty>No projects found.</Empty>
    )}
  </Container>
);

ProjectList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func
};

ProjectList.defaultProps = {
  items: []
};

export default ProjectList;
