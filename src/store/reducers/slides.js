import { ADD_SLIDE, REMOVE_SLIDE } from "../actions/slides";

const slides = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SLIDE:
      return [...state, payload];

    case REMOVE_SLIDE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default slides;
