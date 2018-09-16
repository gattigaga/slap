import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

const Container = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ isActive }) => (isActive ? "#ddd" : "white")};
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${({ isActive }) => (isActive ? "#ddd" : "#eee")};
  }
`;

const Tool = ({ className, icon, onClick, isActive }) => (
  <Container className={className} onClick={onClick} isActive={isActive}>
    {icon}
  </Container>
);

Tool.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

export default Tool;
