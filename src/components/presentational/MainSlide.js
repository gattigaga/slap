import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Textbox from "./Textbox";

const Container = styled.svg`
  width: 640px;
  height: 480px;
  border: 1px solid #ccc;
  background: white;
  margin: auto;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

const MainSlide = ({
  contents,
  active,
  cursor,
  onClick,
  onChangeContent,
  onClickContent,
  onDoubleClickContent,
  onMouseMove,
  isContentEditable
}) => (
  <Container onClick={onClick} onMouseMove={onMouseMove} cursor={cursor}>
    {contents.map(content => (
      <Textbox
        key={content.id}
        width={320}
        height={64}
        {...content.position}
        value={content.content}
        onChange={event => onChangeContent(event, content)}
        onClick={event => onClickContent(event, content)}
        onDoubleClick={event => onDoubleClickContent(event, content)}
        isActive={active === content.id}
        isEditable={isContentEditable}
      />
    ))}
  </Container>
);

MainSlide.propTypes = {
  contents: PropTypes.array,
  active: PropTypes.string,
  cursor: PropTypes.string,
  onClick: PropTypes.func,
  onChangeContent: PropTypes.func,
  onClickContent: PropTypes.func,
  onDoubleClickContent: PropTypes.func,
  onMouseMove: PropTypes.func,
  isContentEditable: PropTypes.bool
};

export default MainSlide;
