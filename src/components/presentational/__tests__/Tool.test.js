import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import Tool from "../Tool";

describe("Tool", () => {
  const Dummy = () => <div />;

  const setup = propOverrides => {
    const props = {
      icon: <Dummy />,
      onClick: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Tool {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule("background", "white");
    expect(wrapper).toHaveStyleRule("background", "#eee", {
      modifier: ":hover"
    });
  });

  it("should renders in active", () => {
    const { wrapper } = setup({ isActive: true });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule("background", "#ddd");
    expect(wrapper).toHaveStyleRule("background", "#ddd", {
      modifier: ":hover"
    });
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
