import { ADD_SLIDE, addSlide } from "../slides";

describe("addSlide()", () => {
  Date.now = jest.fn(() => 1536996330611);

  it("should returns expected action", () => {
    const slide = {
      id: "slide-1",
      projectID: "project-1"
    };

    const expected = {
      type: ADD_SLIDE,
      payload: slide
    };

    const action = addSlide(slide);

    expect(action).toEqual(expected);
  });
});
