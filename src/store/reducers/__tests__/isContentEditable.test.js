import isContentEditable from "../isContentEditable";
import { setIsContentEditable } from "../../actions/isContentEditable";

describe("isContentEditable()", () => {
  it("should returns initial state", () => {
    const expected = false;
    const action = {};
    const state = isContentEditable(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should set editable content condition", () => {
    const expected = true;
    const action = setIsContentEditable(true);
    const state = isContentEditable(undefined, action);

    expect(state).toEqual(expected);
  });
});
