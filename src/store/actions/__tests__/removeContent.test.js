import { REMOVE_CONTENT, removeContent } from "../contents";

describe("removeContent()", () => {
  it("should returns expected action", () => {
    const contentID = "content-1";

    const expected = {
      type: REMOVE_CONTENT,
      payload: contentID
    };

    const action = removeContent(contentID);

    expect(action).toEqual(expected);
  });
});
