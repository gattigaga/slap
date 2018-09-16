export const SET_ACTIVE_CONTEXT = "SET_ACTIVE_CONTEXT";

/**
 * Get action to set active context
 *
 * @param {string} context
 */
export const setActiveContext = context => ({
  type: SET_ACTIVE_CONTEXT,
  payload: context
});
