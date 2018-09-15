import { ADD_CONTENT, addContent } from "../contents";

describe("addContent()", () => {
  it("should returns expected action", () => {
    const content = {
      id: "content-1",
      slideID: "slide-1",
      projectID: "project-1",
      type: "text",
      content: "Hello World",
      position: {
        x: 32,
        y: 32
      }
    };

    const expected = {
      type: ADD_CONTENT,
      payload: content
    };

    const action = addContent(content);

    expect(action).toEqual(expected);
  });
});
