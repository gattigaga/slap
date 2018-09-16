import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import Textbox, { Text } from "../Textbox";

describe("Textbox", () => {
  const setup = propOverrides => {
    const props = {
      value: "My Text",
      width: 420,
      height: 48,
      x: 24,
      y: 24,
      onChange: jest.fn(),
      onClick: jest.fn(),
      onDoubleClick: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Textbox {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Text)).toHaveStyleRule("cursor", "auto");
  });

  it("should renders in active", () => {
    const { wrapper } = setup({ isActive: true });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Text)).toHaveStyleRule("cursor", "pointer");
  });

  it("should renders in editable", () => {
    const { wrapper } = setup({ isActive: true, isEditable: true });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Text)).toHaveStyleRule("cursor", "auto");
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });

  it("should calls 'onDoubleClick' callback while double clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("dblclick");

    expect(props.onDoubleClick).toBeCalled();
  });

  it("should calls 'onChange' callback while changed", () => {
    const { wrapper, props } = setup({ isActive: true, isEditable: true });
    const event = {
      target: {
        value: "Testing"
      }
    };

    wrapper.find(Text).simulate("change", event);

    expect(props.onChange).toBeCalledWith(event);
  });
});
