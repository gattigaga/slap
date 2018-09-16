import React from "react";
import { shallow } from "enzyme";

import MainSlide from "../MainSlide";

jest.mock("../Textbox", () => "Textbox");

describe("MainSlide", () => {
  const setup = propOverrides => {
    const props = {
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
      onChangeContent: jest.fn(),
      onClickContent: jest.fn(),
      onDoubleClickContent: jest.fn(),
      onMouseMove: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<MainSlide {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders with active content", () => {
    const { wrapper } = setup({ active: "content-2" });
    const textbox = wrapper.find("Textbox");

    expect(textbox.at(1).props().isActive).toEqual(true);
  });

  it("should renders with editable content", () => {
    const { wrapper } = setup({
      active: "content-2",
      isContentEditable: true
    });
    const textbox = wrapper.find("Textbox");

    expect(textbox.at(1).props().isActive).toEqual(true);
    expect(textbox.at(1).props().isEditable).toEqual(true);
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });

  it("should calls 'onChangeContent' callback while content changed", () => {
    const { wrapper, props } = setup();
    const event = {
      target: {
        value: "Hello World"
      }
    };

    props.contents.forEach((content, index) => {
      wrapper
        .find("Textbox")
        .at(index)
        .simulate("change", event);

      expect(props.onChangeContent).toBeCalledWith(event, content);
    });
  });

  it("should calls 'onClickContent' callback while content clicked", () => {
    const { wrapper, props } = setup();
    const event = { stopPropagation: () => {} };

    props.contents.forEach((content, index) => {
      wrapper
        .find("Textbox")
        .at(index)
        .simulate("click", event);

      expect(props.onClickContent).toBeCalledWith(event, content);
    });
  });

  it("should calls 'onDoubleClickContent' callback while content double clicked", () => {
    const { wrapper, props } = setup();
    const event = { stopPropagation: () => {} };

    props.contents.forEach((content, index) => {
      wrapper
        .find("Textbox")
        .at(index)
        .simulate("dblclick", event);

      expect(props.onDoubleClickContent).toBeCalledWith(event, content);
    });
  });

  it("should calls 'onMouseMove' callback while mouse moved", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("mousemove");

    expect(props.onMouseMove).toBeCalled();
  });
});
