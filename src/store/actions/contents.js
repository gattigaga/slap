export const ADD_CONTENT = "ADD_CONTENT";

/**
 * Get action to add new content in slide
 *
 * @param {object} content
 */
export const addContent = content => ({
  type: ADD_CONTENT,
  payload: content
});
