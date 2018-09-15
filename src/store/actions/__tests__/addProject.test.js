import { ADD_PROJECT, addProject } from "../projects";

describe("addProject()", () => {
  Date.now = jest.fn(() => 1536996330611);

  it("should returns expected action", () => {
    const project = {
      id: "project-1",
      name: "My Presentation",
      timestamp: Date.now()
    };

    const expected = {
      type: ADD_PROJECT,
      payload: project
    };

    const action = addProject(project);

    expect(action).toEqual(expected);
  });
});
