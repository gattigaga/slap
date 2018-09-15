export const ADD_PROJECT = "ADD_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

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

/**
 * Get action to update a project
 *
 * @param {string} projectID
 * @param {object} newData
 */
export const updateProject = (projectID, newData) => ({
  type: UPDATE_PROJECT,
  payload: {
    projectID,
    newData
  }
});
