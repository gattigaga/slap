export const SET_ACTIVE_PROJECT_ID = "SET_ACTIVE_PROJECT_ID";

/**
 * Get action to set active project ID
 *
 * @param {string} projectID
 */
export const setActiveProjectID = projectID => ({
  type: SET_ACTIVE_PROJECT_ID,
  payload: projectID
});
