import { SET_ACTIVE_CONTENT_ID, setActiveContentID } from "../activeContentID";

describe("setActiveContentID()", () => {
  it("should returns expected action", () => {
    const contentID = "content-1";

    const expected = {
      type: SET_ACTIVE_CONTENT_ID,
      payload: contentID
    };

    const action = setActiveContentID(contentID);

    expect(action).toEqual(expected);
  });
});
