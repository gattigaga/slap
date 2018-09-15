import projects from "../projects";
import {
  addProject,
  updateProject,
  removeProject
} from "../../actions/projects";

describe("projects()", () => {
  it("should returns initial state", () => {
    const expected = [];
    const action = {};
    const state = projects(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should add new project", () => {
    const initial = [
      {
        id: "project-1",
        name: "My Presentation 1",
        timestamp: Date.now()
      }
    ];

    const newProject = {
      id: "project-2",
      name: "My Presentation 2",
      timestamp: Date.now()
    };

    const expected = [newProject, ...initial];
    const action = addProject(newProject);
    const state = projects(initial, action);

    expect(state).toEqual(expected);
  });

  it("should update a project", () => {
    const initial = [
      {
        id: "project-1",
        name: "My Presentation 1",
        timestamp: Date.now()
      },
      {
        id: "project-2",
        name: "My Presentation 2",
        timestamp: Date.now()
      }
    ];

    const projectID = "project-1";

    const newData = {
      name: "My Presentation Updated"
    };

    const expected = [
      {
        id: "project-1",
        name: "My Presentation Updated",
        timestamp: Date.now()
      },
      initial[1]
    ];

    const action = updateProject(projectID, newData);
    const state = projects(initial, action);

    expect(state).toEqual(expected);
  });

  it("should remove a project", () => {
    const initial = [
      {
        id: "project-1",
        name: "My Presentation 1",
        timestamp: Date.now()
      },
      {
        id: "project-2",
        name: "My Presentation 2",
        timestamp: Date.now()
      }
    ];

    const projectID = "project-1";

    const expected = [
      {
        id: "project-2",
        name: "My Presentation 2",
        timestamp: Date.now()
      }
    ];

    const action = removeProject(projectID);
    const state = projects(initial, action);

    expect(state).toEqual(expected);
  });
});
