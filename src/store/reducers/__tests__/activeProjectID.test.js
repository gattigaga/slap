import activeProjectID from "../activeProjectID";
import { setActiveProjectID } from "../../actions/activeProjectID";

describe("activeProjectID()", () => {
  it("should returns initial state", () => {
    const expected = null;
    const action = {};
    const state = activeProjectID(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should set active project", () => {
    const projectID = "project-1";
    const expected = projectID;
    const action = setActiveProjectID(projectID);
    const state = activeProjectID(undefined, action);

    expect(state).toEqual(expected);
  });
});
