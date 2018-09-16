import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

import Tool from "../presentational/Tool";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 4px 24px;
  box-sizing: border-box;
`;

const Toolbar = ({ className, items }) => (
  <Container className={className}>
    {items.map((item, index) => (
      <Tool key={index} {...item} />
    ))}
  </Container>
);

Toolbar.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array
};

export default Toolbar;
