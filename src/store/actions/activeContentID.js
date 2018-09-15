export const SET_ACTIVE_CONTENT_ID = "SET_ACTIVE_CONTENT_ID";

/**
 * Get action to set active content ID
 *
 * @param {string} contentID
 */
export const setActiveContentID = contentID => ({
  type: SET_ACTIVE_CONTENT_ID,
  payload: contentID
});
