import { REMOVE_SLIDE, removeSlide } from "../slides";

describe("removeSlide()", () => {
  it("should returns expected action", () => {
    const slideID = "slide-1";

    const expected = {
      type: REMOVE_SLIDE,
      payload: slideID
    };

    const action = removeSlide(slideID);

    expect(action).toEqual(expected);
  });
});
