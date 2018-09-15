import activeContentID from "../activeContentID";
import { setActiveContentID } from "../../actions/activeContentID";

describe("activeContentID()", () => {
  it("should returns initial state", () => {
    const expected = null;
    const action = {};
    const state = activeContentID(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should set active content", () => {
    const contentID = "content-1";
    const expected = contentID;
    const action = setActiveContentID(contentID);
    const state = activeContentID(undefined, action);

    expect(state).toEqual(expected);
  });
});
