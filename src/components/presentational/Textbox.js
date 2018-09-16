import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "typeface-roboto";

import ContentWrapper from "./ContentWrapper";

export const Text = styled.input`
  font-size: 32px;
  font-family: Roboto;
  color: #333;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 0px;
  border: 0px;
  padding: 8px;
  box-sizing: border-box;
  outline: none;
  background: white;
  cursor: ${({ isActive, disabled }) =>
    isActive && disabled ? "pointer" : "auto"};
`;

const Textbox = ({
  value,
  width,
  height,
  x,
  y,
  onClick,
  onDoubleClick,
  onChange,
  isActive,
  isEditable
}) => (
  <g onClick={onClick} onDoubleClick={onDoubleClick}>
    <foreignObject width={width} height={height} x={x} y={y}>
      <Text
        width={width}
        height={height}
        value={value}
        onChange={onChange}
        disabled={!isEditable}
        isActive={isActive}
      />
    </foreignObject>
    {isActive && <ContentWrapper width={width} height={height} x={x} y={y} />}
  </g>
);

Textbox.propTypes = {
  value: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onChange: PropTypes.func,
  isActive: PropTypes.bool,
  isEditable: PropTypes.bool
};

export default Textbox;
