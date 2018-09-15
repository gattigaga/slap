import {
  ADD_CONTENT,
  UPDATE_CONTENT,
  REMOVE_CONTENT
} from "../actions/contents";

const contents = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CONTENT:
      return [...state, payload];

    case UPDATE_CONTENT:
      return state.map(item => {
        if (item.id === payload.contentID) {
          return { ...item, ...payload.newData };
        }

        return item;
      });

    case REMOVE_CONTENT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default contents;
