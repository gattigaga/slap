import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeSlide } from "../../store/actions/slides";
import { removeContent } from "../../store/actions/contents";
import { setActiveSlideID } from "../../store/actions/activeSlideID";
import SlideList from "../presentational/SlideList";

export const SlideListContainer = ({
  items,
  active,
  onClick,
  onClickDelete
}) => (
  <SlideList
    items={items}
    onClick={onClick}
    onClickDelete={onClickDelete}
    active={active}
  />
);

SlideListContainer.propTypes = {
  items: PropTypes.array,
  active: PropTypes.string,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func
};

const mapStateToProps = ({
  slides,
  contents,
  activeProjectID,
  activeSlideID
}) => {
  const by = (attr, id) => item => item[attr] === id;
  const currentSlides = slides.filter(by("projectID", activeProjectID));
  const currentContents = contents.filter(by("projectID", activeProjectID));

  const items = currentSlides.map(slide => {
    const slideContents = contents.filter(by("slideID", slide.id));

    return {
      ...slide,
      contents: slideContents
    };
  });

  return {
    items,
    slides: currentSlides,
    contents: currentContents,
    active: activeSlideID
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: slide => dispatch(setActiveSlideID(slide.id)),
  onClickDelete: (active, slides, contents) => slide => {
    const call = command => item => dispatch(command(item.id));
    const bySlideID = item => item.slideID === slide.id;
    const isSlideActive = slide.id === active;

    if (isSlideActive) {
      const targetSlide = slides[slides.length - 1];

      dispatch(setActiveSlideID(targetSlide.id));
    }

    dispatch(removeSlide(slide.id));
    contents.filter(bySlideID).forEach(call(removeContent));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { items, active, slides, contents } = stateProps;
  const { onClickDelete } = dispatchProps;

  return {
    ...ownProps,
    ...dispatchProps,
    items,
    active,
    onClickDelete: onClickDelete(active, slides, contents)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SlideListContainer);
