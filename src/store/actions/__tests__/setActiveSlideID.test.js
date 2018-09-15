import { SET_ACTIVE_SLIDE_ID, setActiveSlideID } from "../activeSlideID";

describe("setActiveSlideID()", () => {
  it("should returns expected action", () => {
    const slideID = "slide-1";

    const expected = {
      type: SET_ACTIVE_SLIDE_ID,
      payload: slideID
    };

    const action = setActiveSlideID(slideID);

    expect(action).toEqual(expected);
  });
});
