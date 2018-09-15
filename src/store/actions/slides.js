export const ADD_SLIDE = "ADD_SLIDE";
export const REMOVE_SLIDE = "REMOVE_SLIDE";

/**
 * Get action to add new slide
 *
 * @param {object} slide
 */
export const addSlide = slide => ({
  type: ADD_SLIDE,
  payload: slide
});

/**
 * Get action to remove a slide
 *
 * @param {string} slideID
 */
export const removeSlide = slideID => ({
  type: REMOVE_SLIDE,
  payload: slideID
});
