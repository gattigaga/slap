import { SET_ACTIVE_CONTEXT } from "../actions/activeContext";

const activeContext = (state = "arrow", action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_CONTEXT:
      return payload;

    default:
      return state;
  }
};

export default activeContext;
