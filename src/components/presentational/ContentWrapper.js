import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

const Outline = styled.rect`
  fill: none;
  stroke: #686de0;
  stroke-width: 2px;
  cursor: pointer;
`;

const Point = styled.rect`
  fill: #686de0;
  stroke: white;
  stroke-width: 2px;
`;

const ContentWrapper = ({ width, height, x, y }) => {
  const pointSize = {
    width: 8,
    height: 8
  };

  const modifier = 8 / 2;

  const points = [
    {
      ...pointSize,
      x: x - modifier,
      y: y - modifier,
      style: { cursor: "nw-resize" }
    },
    {
      ...pointSize,
      x: x + width / 2 - modifier,
      y: y - modifier,
      style: { cursor: "n-resize" }
    },
    {
      ...pointSize,
      x: x + width - modifier,
      y: y - modifier,
      style: { cursor: "ne-resize" }
    },
    {
      ...pointSize,
      x: x - modifier,
      y: y + height / 2 - modifier,
      style: { cursor: "w-resize" }
    },
    {
      ...pointSize,
      x: x + width - modifier,
      y: y + height / 2 - modifier,
      style: { cursor: "e-resize" }
    },
    {
      ...pointSize,
      x: x - modifier,
      y: y + height - modifier,
      style: { cursor: "sw-resize" }
    },
    {
      ...pointSize,
      x: x + width / 2 - modifier,
      y: y + height - modifier,
      style: { cursor: "s-resize" }
    },
    {
      ...pointSize,
      x: x + width - modifier,
      y: y + height - modifier,
      style: { cursor: "se-resize" }
    }
  ];

  return (
    <g>
      <Outline width={width} height={height} x={x} y={y} />
      {points.map((point, index) => (
        <Point key={index} {...point} />
      ))}
    </g>
  );
};

ContentWrapper.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

ContentWrapper.defaultProps = {
  width: 320,
  height: 96
};

export default ContentWrapper;
