import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MdAddBox, MdFormatShapes, MdCallMade } from "react-icons/md";
import styled from "styled-components";
import uuid from "uuid/v4";

import { addSlide } from "../../store/actions/slides";
import { setActiveSlideID } from "../../store/actions/activeSlideID";
import { setActiveContext } from "../../store/actions/activeContext";
import Toolbar from "../presentational/Toolbar";
import { setActiveContentID } from "../../store/actions/activeContentID";
import { setIsContentEditable } from "../../store/actions/isContentEditable";

const IconAddSlide = styled(MdAddBox)`
  font-size: 20px;
  color: #555;
`;

const IconCursor = IconAddSlide.withComponent(MdCallMade);

const IconTextbox = IconAddSlide.withComponent(MdFormatShapes);

export const ToolbarContainer = ({
  activeContext,
  onClickAddSlide,
  onClickCursor,
  onClickTextbox
}) => {
  const items = [
    {
      icon: <IconAddSlide />,
      onClick: onClickAddSlide,
      isActive: false
    },
    {
      icon: <IconCursor />,
      onClick: onClickCursor,
      isActive: activeContext === "arrow"
    },
    {
      icon: <IconTextbox />,
      onClick: onClickTextbox,
      isActive: activeContext === "textbox"
    }
  ];

  return <Toolbar items={items} />;
};

ToolbarContainer.propTypes = {
  activeContext: PropTypes.string,
  onClickAddSlide: PropTypes.func,
  onClickCursor: PropTypes.func,
  onClickTextbox: PropTypes.func
};

const mapStateToProps = ({ activeContext, activeProjectID }) => ({
  activeContext,
  activeProjectID
});

const mapDispatchToProps = dispatch => ({
  onClickAddSlide: projectID => {
    const slide = {
      id: uuid(),
      projectID
    };

    dispatch(addSlide(slide));
    dispatch(setActiveSlideID(slide.id));
  },
  onClickContext: context => {
    dispatch(setActiveContext(context));
    dispatch(setActiveContentID(null));
    dispatch(setIsContentEditable(false));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { activeProjectID, activeContext } = stateProps;
  const { onClickAddSlide, onClickContext } = dispatchProps;

  return {
    ...ownProps,
    ...dispatchProps,
    activeContext,
    onClickAddSlide: () => onClickAddSlide(activeProjectID),
    onClickCursor: () => onClickContext("arrow"),
    onClickTextbox: () => onClickContext("textbox")
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ToolbarContainer);
