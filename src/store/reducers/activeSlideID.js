import { SET_ACTIVE_SLIDE_ID } from "../actions/activeSlideID";

const activeSlideID = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_SLIDE_ID:
      return payload;

    default:
      return state;
  }
};

export default activeSlideID;
