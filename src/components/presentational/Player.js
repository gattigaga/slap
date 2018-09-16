import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose
} from "react-icons/md";

import MainSlide from "./MainSlide";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  color: white;
  font-size: 96px;
  padding: 4px;
  cursor: pointer;
`;

export const ArrowRight = ArrowLeft.withComponent(MdKeyboardArrowRight);

export const Close = styled(MdClose)`
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 48px;
  color: #555;
  cursor: pointer;
`;

const Player = ({
  active,
  slides,
  onClickLeft,
  onClickRight,
  onClickClose
}) => {
  const slide = slides.find((_, index) => index === active);

  return (
    <Container>
      <ArrowLeft onClick={onClickLeft} />
      <MainSlide contents={slide.contents} />
      <ArrowRight onClick={onClickRight} />
      <Close onClick={onClickClose} />
    </Container>
  );
};

Player.propTypes = {
  active: PropTypes.number,
  slides: PropTypes.array,
  onClickLeft: PropTypes.func,
  onClickRight: PropTypes.func,
  onClickClose: PropTypes.func
};

export default Player;
