import React from "react";
import { shallow } from "enzyme";

import Toolbar from "../Toolbar";

jest.mock("../Tool", () => "Tool");

describe("Toolbar", () => {
  const Dummy = () => <div />;

  const setup = propOverrides => {
    const props = {
      items: [
        {
          icon: <Dummy name="first" />,
          onClick: jest.fn()
        },
        {
          icon: <Dummy name="second" />,
          onClick: jest.fn()
        },
        {
          icon: <Dummy name="third" />,
          onClick: jest.fn(),
          isActive: true
        }
      ],
      ...propOverrides
    };

    const wrapper = shallow(<Toolbar {...props} />);

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

    props.items.forEach((item, index) => {
      wrapper
        .find("Tool")
        .at(index)
        .simulate("click");

      expect(item.onClick).toBeCalled();
    });
  });
});
