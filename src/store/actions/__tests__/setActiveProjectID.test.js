import { SET_ACTIVE_PROJECT_ID, setActiveProjectID } from "../activeProjectID";

describe("setActiveProjectID()", () => {
  it("should returns expected action", () => {
    const projectID = "project-1";

    const expected = {
      type: SET_ACTIVE_PROJECT_ID,
      payload: projectID
    };

    const action = setActiveProjectID(projectID);

    expect(action).toEqual(expected);
  });
});
