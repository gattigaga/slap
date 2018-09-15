export const ADD_PROJECT = "ADD_PROJECT";

/**
 * Get action to add new project
 *
 * @param {onject} project
 */
export const addProject = project => ({
  type: ADD_PROJECT,
  payload: project
});
