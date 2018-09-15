import React from "react";
import { shallow } from "enzyme";

import Button from "../Button";

describe("Button", () => {
  const Dummy = () => <div />;

  const setup = propOverrides => {
    const props = {
      caption: "My Own Button",
      onClick: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Button {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders with icon", () => {
    const { wrapper } = setup({ icon: <Dummy /> });

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
