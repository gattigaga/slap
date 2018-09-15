import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background: #eb4d4b;
  color: white;
  border: 0px;
  padding: 4px 8px;
  font-size: 11px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #ce3d3b;
  }
`;

const SmallButton = ({ caption, onClick }) => (
  <Button onClick={onClick}>{caption}</Button>
);

SmallButton.propTypes = {
  caption: PropTypes.string,
  onClick: PropTypes.func
};

export default SmallButton;
