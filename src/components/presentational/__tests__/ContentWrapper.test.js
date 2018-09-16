import React from "react";
import { shallow } from "enzyme";

import ContentWrapper from "../ContentWrapper";

describe("ContentWrapper", () => {
  const setup = propOverrides => {
    const props = {
      width: 320,
      height: 48,
      x: 32,
      y: 32,
      ...propOverrides
    };

    const wrapper = shallow(<ContentWrapper {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
