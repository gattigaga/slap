import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import Project, { Name } from "../Project";

describe("Project", () => {
  jest.mock("../Thumbnail", () => "Thumbnail");
  jest.mock("../SmallButton", () => "SmallButton");

  const setup = propOverrides => {
    const props = {
      name: "My Own Slides",
      timestamp: 1537004755445,
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

    const wrapper = shallow(<Project {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClick' callback while name clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(Name).simulate("click");

    expect(props.onClick).toBeCalled();
  });

  it("should calls 'onClickDelete' callback while delete clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find("SmallButton").simulate("click");

    expect(props.onClickDelete).toBeCalled();
  });
});
