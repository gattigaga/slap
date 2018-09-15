import { SET_ACTIVE_CONTENT_ID } from "../actions/activeContentID";

const activeContentID = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_CONTENT_ID:
      return payload;

    default:
      return state;
  }
};

export default activeContentID;
