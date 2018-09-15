import { SET_ACTIVE_PROJECT_ID } from "../actions/activeProjectID";

const activeProjectID = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_PROJECT_ID:
      return payload;

    default:
      return state;
  }
};

export default activeProjectID;
