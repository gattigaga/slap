import { SET_IS_CONTENT_EDITABLE } from "../actions/isContentEditable";

const isContentEditable = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_CONTENT_EDITABLE:
      return payload;

    default:
      return state;
  }
};

export default isContentEditable;
