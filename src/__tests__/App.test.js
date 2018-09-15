import React from "react";
import { shallow } from "enzyme";

import App from "../App";

jest.mock("../components/container/Home", () => "Home");

describe("App", () => {
  const setup = propOverrides => {
    const props = {
      ...propOverrides
    };

    const wrapper = shallow(<App {...props} />);

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
