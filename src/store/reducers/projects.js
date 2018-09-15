import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT
} from "../actions/projects";

const projects = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PROJECT:
      return [payload, ...state];

    case UPDATE_PROJECT:
      return state.map(item => {
        if (item.id === payload.projectID) {
          return { ...item, ...payload.newData };
        }

        return item;
      });

    case REMOVE_PROJECT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default projects;
