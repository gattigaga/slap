import activeSlideID from "../activeSlideID";
import { setActiveSlideID } from "../../actions/activeSlideID";

describe("activeSlideID()", () => {
  it("should returns initial state", () => {
    const expected = null;
    const action = {};
    const state = activeSlideID(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should set active slide", () => {
    const slideID = "slide-1";
    const expected = slideID;
    const action = setActiveSlideID(slideID);
    const state = activeSlideID(undefined, action);

    expect(state).toEqual(expected);
  });
});
