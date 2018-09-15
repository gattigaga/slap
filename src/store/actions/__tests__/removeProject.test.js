import { REMOVE_PROJECT, removeProject } from "../projects";

describe("removeProject()", () => {
  it("should returns expected action", () => {
    const projectID = "project-1";

    const expected = {
      type: REMOVE_PROJECT,
      payload: projectID
    };

    const action = removeProject(projectID);

    expect(action).toEqual(expected);
  });
});
