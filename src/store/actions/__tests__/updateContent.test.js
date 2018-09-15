import { UPDATE_CONTENT, updateContent } from "../contents";

describe("updateContent()", () => {
  it("should returns expected action", () => {
    const contentID = "content-1";

    const newData = {
      content: "Updated Content"
    };

    const expected = {
      type: UPDATE_CONTENT,
      payload: {
        contentID,
        newData
      }
    };

    const action = updateContent(contentID, newData);

    expect(action).toEqual(expected);
  });
});
