import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import ProjectList from "../ProjectList";

describe("ProjectList", () => {
  jest.mock("../Project", () => "Project");

  const setup = propOverrides => {
    const props = {
      items: [...Array(3)].map((_, index) => ({
        id: `project-${index + 1}`,
        name: `Project ${index + 1}`,
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
        ]
      })),
      onClick: jest.fn(),
      onClickDelete: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<ProjectList {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders without items", () => {
    const { wrapper } = setup({ items: [] });

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClick' callback while name clicked", () => {
    const { wrapper, props } = setup();

    props.items.forEach((item, index) => {
      wrapper
        .find("Project")
        .at(index)
        .props()
        .onClick(item);

      expect(props.onClick).toBeCalledWith(item);
    });
  });

  it("should calls 'onClickDelete' callback while delete clicked", () => {
    const { wrapper, props } = setup();

    props.items.forEach((item, index) => {
      wrapper
        .find("Project")
        .at(index)
        .props()
        .onClickDelete(item);

      expect(props.onClickDelete).toBeCalledWith(item);
    });
  });
});
