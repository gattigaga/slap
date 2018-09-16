import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import Slide, { IconClose } from "../Slide";

jest.mock("../Thumbnail", () => "Thumbnail");

describe("Slide", () => {
  const setup = propOverrides => {
    const props = {
      index: 1,
      contents: [
        {
          id: "content-1",
          slideID: "slide-1",
          projectID: "project-1",
          type: "text",
          content: "Hello World",
          position: {
            x: 32,
            y: 32
          }
        },
        {
          id: "content-2",
          slideID: "slide-1",
          projectID: "project-1",
          type: "text",
          content: "Stay hungry",
          position: {
            x: 128,
            y: 96
          }
        }
      ],
      onClick: jest.fn(),
      onClickDelete: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Slide {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule("background", "#eee");
  });

  it("should renders in active", () => {
    const { wrapper } = setup({ isActive: true });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule("background", "#ddd");
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find("Thumbnail").simulate("click");

    expect(props.onClick).toBeCalled();
  });

  it("should calls 'onClickDelete' callback while delete clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(IconClose).simulate("click");

    expect(props.onClickDelete).toBeCalled();
  });
});
