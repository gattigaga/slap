import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { format } from "date-fns";
import "typeface-roboto";

import Thumbnail from "./Thumbnail";
import SmallButton from "./SmallButton";

const Container = styled.div`
  margin-bottom: 16px;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: Roboto;
  color: #333;
  margin-top: 12px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const Date = styled.p`
  font-size: 18px;
  font-family: Roboto;
  color: #aaa;
  margin: 0px;
  margin-bottom: 12px;
`;

const Project = ({ name, timestamp, contents, onClick, onClickDelete }) => (
  <Container>
    <Thumbnail contents={contents} onClick={onClick} />
    <Name onClick={onClick}>{name}</Name>
    <Date>{format(timestamp, "MMM DD, YYYY")}</Date>
    <SmallButton caption="Delete" onClick={onClickDelete} />
  </Container>
);

Project.propTypes = {
  name: PropTypes.string,
  timestamp: PropTypes.number,
  contents: PropTypes.array,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default Project;
