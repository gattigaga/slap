import React from "react";
import { shallow } from "enzyme";

import Header, { PlayButton, CloseButton } from "../Header";

describe("Header", () => {
  const setup = propOverrides => {
    const props = {
      name: "My Project",
      onClickPlay: jest.fn(),
      onClickClose: jest.fn(),
      onChangeName: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Header {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClickPlay' callback while play clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(PlayButton).simulate("click");

    expect(props.onClickPlay).toBeCalled();
  });

  it("should calls 'onClickClose' callback while close clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(CloseButton).simulate("click");

    expect(props.onClickClose).toBeCalled();
  });
});
