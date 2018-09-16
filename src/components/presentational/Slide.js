import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "typeface-roboto";

import Thumbnail from "./Thumbnail";

const Container = styled.div`
  width: 200px;
  background: ${({ isActive }) => (isActive ? "#ddd" : "#eee")};
  margin-right: 4px;
  display: flex;
  justify-content: flex-end;
  padding: 4px 8px;
  box-sizing: border-box;
`;

const Index = styled.p`
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  color: #333;
  margin-top: 4px;
  margin-right: 8px;
`;

export const IconClose = styled(MdClose)`
  font-size: 14px;
  color: #aaa;
  margin-left: 8px;
  cursor: pointer;
`;

const Slide = ({
  className,
  index,
  contents,
  onClick,
  onClickDelete,
  isActive
}) => (
  <Container className={className} isActive={isActive}>
    <Index>{index}</Index>
    <Thumbnail width={128} contents={contents} onClick={onClick} />
    <IconClose onClick={onClickDelete} />
  </Container>
);

Slide.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  contents: PropTypes.array,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func,
  isActive: PropTypes.bool
};

export default Slide;
