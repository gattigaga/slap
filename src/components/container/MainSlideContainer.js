import React, { createRef, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import { addContent, updateContent } from "../../store/actions/contents";
import { setActiveContentID } from "../../store/actions/activeContentID";
import { setActiveContext } from "../../store/actions/activeContext";
import { setIsContentEditable } from "../../store/actions/isContentEditable";
import MainSlide from "../presentational/MainSlide";

export class MainSlideContainer extends Component {
  constructor(props) {
    super(props);

    this.slide = createRef();
  }

  render() {
    const {
      contents,
      active,
      cursor,
      onClick,
      onChangeContent,
      onClickContent,
      onDoubleClickContent,
      onMouseMove,
      isContentEditable
    } = this.props;

    return (
      <MainSlide
        ref={this.slide}
        cursor={cursor}
        contents={contents}
        onClick={event => onClick(event, this.slide)}
        onChangeContent={onChangeContent}
        onClickContent={onClickContent}
        onDoubleClickContent={onDoubleClickContent}
        onMouseMove={onMouseMove}
        active={active}
        isContentEditable={isContentEditable}
      />
    );
  }
}

MainSlideContainer.propTypes = {
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

const mapStateToProps = ({
  contents,
  activeProjectID,
  activeSlideID,
  activeContentID,
  activeContext,
  isContentEditable
}) => {
  const by = (attr, id) => item => item[attr] === id;
  const currentContents = contents.filter(by("slideID", activeSlideID));

  return {
    isContentEditable,
    activeContext,
    activeProjectID,
    activeSlideID,
    cursor: activeContext === "textbox" ? "crosshair" : "auto",
    contents: currentContents,
    active: activeContentID
  };
};

const mapDispatchToProps = dispatch => ({
  onClickContent: (event, content) => {
    event.stopPropagation();
    dispatch(setActiveContentID(content.id));
  },
  onDoubleClickContent: (event, content) => {
    event.stopPropagation();
    dispatch(setActiveContentID(content.id));
    dispatch(setIsContentEditable(true));
  },
  onChangeContent: (event, content) => {
    const data = { content: event.target.value };
    dispatch(updateContent(content.id, data));
  },
  onClick: ({ context, projectID, slideID, position }) => {
    if (context === "textbox") {
      const content = {
        id: uuid(),
        slideID,
        projectID,
        type: "text",
        content: "New Text",
        position
      };

      dispatch(addContent(content));
      dispatch(setActiveContentID(content.id));
      dispatch(setActiveContext("arrow"));
    } else {
      dispatch(setActiveContentID(null));
      dispatch(setIsContentEditable(false));
    }
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { onClick } = dispatchProps;
  const { activeContext, activeProjectID, activeSlideID } = stateProps;

  return {
    ...ownProps,
    ...dispatchProps,
    ...stateProps,
    onClick: (event, slideRef) => {
      const ctm = slideRef.current.getScreenCTM();
      const position = {
        x: (event.clientX - ctm.e) / ctm.a,
        y: (event.clientY - ctm.f) / ctm.d
      };

      onClick({
        context: activeContext,
        projectID: activeProjectID,
        slideID: activeSlideID,
        position
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainSlideContainer);
