import contents from "../contents";
import {
  addContent,
  updateContent,
  removeContent
} from "../../actions/contents";

describe("contents()", () => {
  it("should returns initial state", () => {
    const expected = [];
    const action = {};
    const state = contents(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should add new content", () => {
    const initial = [
      {
        id: "content-1",
        slideID: "slide-1",
        projectID: "project-1",
        type: "text",
        content: "Hello World",
        position: {
          x: 32,
          y: 32
        }
      }
    ];

    const newContent = {
      id: "content-2",
      slideID: "slide-1",
      projectID: "project-1",
      type: "text",
      content: "Hello Code",
      position: {
        x: 64,
        y: 64
      }
    };

    const expected = [...initial, newContent];
    const action = addContent(newContent);
    const state = contents(initial, action);

    expect(state).toEqual(expected);
  });

  it("should update a content", () => {
    const initial = [
      {
        id: "content-1",
        slideID: "slide-1",
        projectID: "project-1",
        type: "text",
        content: "Hello World",
        position: {
          x: 32,
          y: 32
        }
      },
      {
        id: "content-2",
        slideID: "slide-1",
        projectID: "project-1",
        type: "text",
        content: "Hello Code",
        position: {
          x: 64,
          y: 64
        }
      }
    ];

    const contentID = "content-1";

    const newData = {
      content: "My Content Updated"
    };

    const expected = [
      {
        ...initial[0],
        ...newData
      },
      initial[1]
    ];

    const action = updateContent(contentID, newData);
    const state = contents(initial, action);

    expect(state).toEqual(expected);
  });

  it("should remove a content", () => {
    const initial = [
      {
        id: "content-1",
        slideID: "slide-1",
        projectID: "project-1",
        type: "text",
        content: "Hello World",
        position: {
          x: 32,
          y: 32
        }
      },
      {
        id: "content-2",
        slideID: "slide-1",
        projectID: "project-1",
        type: "text",
        content: "Hello Code",
        position: {
          x: 64,
          y: 64
        }
      }
    ];

    const contentID = "content-1";
    const expected = [initial[1]];
    const action = removeContent(contentID);
    const state = contents(initial, action);

    expect(state).toEqual(expected);
  });
});
