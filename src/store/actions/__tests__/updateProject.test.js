import { UPDATE_PROJECT, updateProject } from "../projects";

describe("updateProject()", () => {
  it("should returns expected action", () => {
    const projectID = "project-1";

    const newData = {
      name: "Updated Presentation"
    };

    const expected = {
      type: UPDATE_PROJECT,
      payload: {
        projectID,
        newData
      }
    };

    const action = updateProject(projectID, newData);

    expect(action).toEqual(expected);
  });
});
