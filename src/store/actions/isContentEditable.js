export const SET_IS_CONTENT_EDITABLE = "SET_IS_CONTENT_EDITABLE";

/**
 * Get action to set editable content
 *
 * @param {boolean} isEditable
 */
export const setIsContentEditable = isEditable => ({
  type: SET_IS_CONTENT_EDITABLE,
  payload: isEditable
});
