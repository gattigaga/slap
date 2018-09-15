export const ADD_PROJECT = "ADD_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

/**
 * Get action to add new project
 *
 * @param {object} project
 */
export const addProject = project => ({
  type: ADD_PROJECT,
  payload: project
});

/**
 * Get action to remove a project
 *
 * @param {string} projectID
 */
export const removeProject = projectID => ({
  type: REMOVE_PROJECT,
  payload: projectID
});
