export const ADD_CONTENT = "ADD_CONTENT";
export const REMOVE_CONTENT = "REMOVE_CONTENT";

/**
 * Get action to add new content in slide
 *
 * @param {object} content
 */
export const addContent = content => ({
  type: ADD_CONTENT,
  payload: content
});

/**
 * Get action to remove a content
 *
 * @param {string} contentID
 */
export const removeContent = contentID => ({
  type: REMOVE_CONTENT,
  payload: contentID
});
