import React from "react";
import { shallow } from "enzyme";

import Thumbnail from "../Thumbnail";

describe("Thumbnail", () => {
  const setup = propOverrides => {
    const props = {
      width: 240,
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
      ...propOverrides
    };

    const wrapper = shallow(<Thumbnail {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders without contents", () => {
    const { wrapper } = setup({ contents: [] });

    expect(wrapper).toMatchSnapshot();
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
