import {
  SET_IS_CONTENT_EDITABLE,
  setIsContentEditable
} from "../isContentEditable";

describe("isContentEditable()", () => {
  it("should returns expected action", () => {
    const expected = {
      type: SET_IS_CONTENT_EDITABLE,
      payload: true
    };

    const action = setIsContentEditable(true);

    expect(action).toEqual(expected);
  });
});
