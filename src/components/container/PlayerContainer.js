import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateProject } from "../../store/actions/projects";
import Player from "../presentational/Player";

export class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  /**
   * Move to prev slide
   *
   * @memberof PlayerContainer
   */
  prev() {
    this.setState(prevState => {
      const { index } = prevState;

      if (index > 0) {
        return { index: index - 1 };
      }

      return { index };
    });
  }

  /**
   * Move to next slide
   *
   * @memberof PlayerContainer
   */
  next() {
    const { slides } = this.props;

    this.setState(prevState => {
      const { index } = prevState;

      if (index < slides.length - 1) {
        return { index: index + 1 };
      }

      return { index };
    });
  }

  render() {
    const { index } = this.state;
    const { slides, onClickClose } = this.props;

    return (
      <Player
        active={index}
        slides={slides}
        onClickClose={onClickClose}
        onClickLeft={this.prev}
        onClickRight={this.next}
      />
    );
  }
}

PlayerContainer.propTypes = {
  slides: PropTypes.array,
  onClickClose: PropTypes.func
};

const mapStateToProps = ({ activeProjectID, slides, contents }) => {
  const by = (attr, id) => item => item[attr] === id;
  let currentSlides = slides.filter(by("projectID", activeProjectID));

  currentSlides = currentSlides.map(slide => {
    const slideContents = contents.filter(by("slideID", slide.id));

    return {
      ...slide,
      contents: slideContents
    };
  });

  return {
    activeProjectID,
    slides: currentSlides
  };
};

const mapDispatchToProps = dispatch => ({
  onClickClose: projectID => {
    const data = { isPlayed: false };
    dispatch(updateProject(projectID, data));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { slides, activeProjectID } = stateProps;
  const { onClickClose } = dispatchProps;

  return {
    ...ownProps,
    slides,
    onClickClose: () => onClickClose(activeProjectID)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlayerContainer);
