import React from "react";
import { shallow } from "enzyme";

import Player, { ArrowLeft, ArrowRight, Close } from "../Player";

jest.mock("../MainSlide", () => "MainSlide");

describe("Player", () => {
  const setup = propOverrides => {
    const props = {
      active: 0,
      slides: [
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
      onClickLeft: jest.fn(),
      onClickRight: jest.fn(),
      onClickClose: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Player {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClickLeft' callback while left clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(ArrowLeft).simulate("click");

    expect(props.onClickLeft).toBeCalled();
  });

  it("should calls 'onClickRight' callback while left clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(ArrowRight).simulate("click");

    expect(props.onClickRight).toBeCalled();
  });

  it("should calls 'onClickClose' callback while close clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(Close).simulate("click");

    expect(props.onClickClose).toBeCalled();
  });
});
