import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdPlayArrow, MdClose } from "react-icons/md";
import "typeface-roboto";

import Button from "./Button";

const Container = styled.div`
  width: 100%;
  height: 64px;
  background: white;
  display: flex;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
`;

const Name = styled.input`
  border: 0px;
  border-bottom: 1px solid white;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  outline: none;
  padding: 8px 0px;

  &:focus {
    border-color: #ccc;
  }
`;

const IconPlay = styled(MdPlayArrow)`
  font-size: 20px;
  color: white;
  margin-right: 4px;
`;

const IconClose = IconPlay.withComponent(MdClose);

export const PlayButton = styled(Button)`
  background: #4834d4;
  margin-right: 4px;
  margin-left: auto;

  &:hover {
    background: #3a2aaf;
  }
`;

export const CloseButton = styled(Button)`
  background: #eb4d4b;

  &:hover {
    background: #cc4341;
  }
`;

const Header = ({
  className,
  name,
  onClickPlay,
  onClickClose,
  onChangeName
}) => (
  <Container className={className}>
    <Name onChange={onChangeName} value={name} />
    <PlayButton icon={<IconPlay />} caption="Play" onClick={onClickPlay} />
    <CloseButton icon={<IconClose />} caption="Close" onClick={onClickClose} />
  </Container>
);

Header.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClickClose: PropTypes.func,
  onClickPlay: PropTypes.func,
  onChangeName: PropTypes.func
};

export default Header;
