export const SET_ACTIVE_SLIDE_ID = "SET_ACTIVE_SLIDE_ID";

/**
 * Get action to set active slide ID
 *
 * @param {string} slideID
 */
export const setActiveSlideID = slideID => ({
  type: SET_ACTIVE_SLIDE_ID,
  payload: slideID
});
