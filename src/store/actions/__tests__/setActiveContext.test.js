import { SET_ACTIVE_CONTEXT, setActiveContext } from "../activeContext";

describe("activeContext()", () => {
  it("should returns expected action", () => {
    const context = "arrow";

    const expected = {
      type: SET_ACTIVE_CONTEXT,
      payload: context
    };

    const action = setActiveContext(context);

    expect(action).toEqual(expected);
  });
});
