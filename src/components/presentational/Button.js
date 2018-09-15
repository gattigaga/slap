import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

const Container = styled.div`
  display: inline-flex;
  width: auto;
  align-items: center;
  background: #6ab04c;
  color: white;
  border: 0px;
  padding: 8px 12px;
  font-size: 11px;
  outline: none;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: #4a8232;
  }
`;

const Caption = styled.p`
  font-size: 12px;
  font-family: Roboto;
  margin: 0px;
`;

const Button = ({ className, icon, caption, onClick }) => (
  <Container className={className} onClick={onClick}>
    {icon && icon}
    <Caption>{caption}</Caption>
  </Container>
);

Button.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func
};

export default Button;
