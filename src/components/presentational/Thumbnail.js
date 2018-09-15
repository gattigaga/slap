import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

const Container = styled.svg`
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const Text = styled.text`
  font-family: Roboto;
  color: black;
`;

const Thumbnail = ({ width, contents, onClick }) => {
  const baseWidth = 640;
  const baseHeight = 480;
  const baseFontSize = 32;
  const height = (baseHeight / baseWidth) * width;
  const scale = width / baseWidth;
  const fontSize = baseFontSize * scale;

  return (
    <Container width={width} height={height} onClick={onClick}>
      {contents.map(content => {
        const { position } = content;
        const x = position.x * scale;
        const y = position.y * scale;

        return (
          <Text key={content.id} x={x} y={y} fontSize={fontSize}>
            {content.content}
          </Text>
        );
      })}
    </Container>
  );
};

Thumbnail.propTypes = {
  width: PropTypes.number,
  contents: PropTypes.array,
  onClick: PropTypes.func
};

Thumbnail.defaultProps = {
  width: 240,
  contents: []
};

export default Thumbnail;
