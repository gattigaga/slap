import activeContext from "../activeContext";
import { setActiveContext } from "../../actions/activeContext";

describe("activeContext()", () => {
  it("should returns initial state", () => {
    const expected = "arrow";
    const action = {};
    const state = activeContext(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should set active context", () => {
    const context = "textbox";
    const expected = context;
    const action = setActiveContext(context);
    const state = activeContext(undefined, action);

    expect(state).toEqual(expected);
  });
});
