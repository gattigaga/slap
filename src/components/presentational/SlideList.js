import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

import Slide from "./Slide";

const Container = styled.div`
  width: 220px;
  border-right: 1px solid #ccc;
  background: #eee;
  overflow-y: auto;
`;

const SlideList = ({ className, items, active, onClick, onClickDelete }) => (
  <Container className={className}>
    {items.map((item, index) => (
      <Slide
        key={index}
        index={index + 1}
        {...item}
        onClick={() => onClick(item)}
        onClickDelete={() => onClickDelete(item)}
        isActive={active === item.id}
      />
    ))}
  </Container>
);

SlideList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  active: PropTypes.string,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func
};

SlideList.defaultProps = {
  items: []
};

export default SlideList;
