export const ADD_SLIDE = "ADD_SLIDE";

/**
 * Get action to add new slide
 *
 * @param {object} slide
 */
export const addSlide = slide => ({
  type: ADD_SLIDE,
  payload: slide
});
