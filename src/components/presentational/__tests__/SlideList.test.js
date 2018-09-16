import React from "react";
import { shallow } from "enzyme";

import SlideList from "../SlideList";

jest.mock("../Slide", () => "Slide");

describe("SlideList", () => {
  const setup = propOverrides => {
    const props = {
      items: [
        {
          id: "slide-1",
          projectID: "project-1",
          contents: [
            {
              id: "content-1",
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
        },
        {
          id: "slide-2",
          projectID: "project-1",
          contents: [
            {
              id: "content-2",
              slideID: "slide-2",
              projectID: "project-1",
              type: "text",
              content: "Stay foolish",
              position: {
                x: 128,
                y: 128
              }
            }
          ]
        }
      ],
      onClick: jest.fn(),
      onClickDelete: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<SlideList {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders with active item", () => {
    const { wrapper } = setup({ active: "slide-2" });
    const slide = wrapper.find("Slide");

    expect(slide.at(0).props().isActive).toEqual(false);
    expect(slide.at(1).props().isActive).toEqual(true);
  });

  it("should calls 'onClick' callback while item clicked", () => {
    const { wrapper, props } = setup();

    props.items.forEach((item, index) => {
      wrapper
        .find("Slide")
        .at(index)
        .props()
        .onClick(item);

      expect(props.onClick).toBeCalledWith(item);
    });
  });

  it("should calls 'onClickDelete' callback while item delete clicked", () => {
    const { wrapper, props } = setup();

    props.items.forEach((item, index) => {
      wrapper
        .find("Slide")
        .at(index)
        .props()
        .onClickDelete(item);

      expect(props.onClickDelete).toBeCalledWith(item);
    });
  });
});
