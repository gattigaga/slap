import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import SmallButton from "../SmallButton";

describe("Thumbnail", () => {
  const setup = propOverrides => {
    const props = {
      caption: "My Own Button",
      onClick: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<SmallButton {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
