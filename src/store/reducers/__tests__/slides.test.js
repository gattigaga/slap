import slides from "../slides";
import { addSlide, removeSlide } from "../../actions/slides";

describe("slides()", () => {
  it("should returns initial state", () => {
    const expected = [];
    const action = {};
    const state = slides(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should add new slide", () => {
    const initial = [
      {
        id: "slide-1",
        projectID: "project-1"
      }
    ];

    const newSlide = {
      id: "slide-2",
      projectID: "project-1"
    };

    const expected = [...initial, newSlide];
    const action = addSlide(newSlide);
    const state = slides(initial, action);

    expect(state).toEqual(expected);
  });

  it("should remove a slide", () => {
    const initial = [
      {
        id: "slide-1",
        projectID: "project-1"
      },
      {
        id: "slide-2",
        projectID: "project-1"
      }
    ];

    const slideID = "slide-1";
    const expected = [initial[1]];
    const action = removeSlide(slideID);
    const state = slides(initial, action);

    expect(state).toEqual(expected);
  });
});
