import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { PlayerContainer } from "../PlayerContainer";

describe("PlayerContainer", () => {
  jest.mock("../../presentational/ProjectList", () => "ProjectList");

  const mockStore = configureMockStore();

  const slides = [
    {
      id: "slide-1",
      projectID: "project-1"
    },
    {
      id: "slide-2",
      projectID: "project-1"
    }
  ];

  const contents = [
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
      slideID: "slide-2",
      projectID: "project-1",
      type: "text",
      content: "Hello Code",
      position: {
        x: 64,
        y: 64
      }
    }
  ];

  const setup = propOverrides => {
    const props = {
      slides: [
        {
          ...slides[0],
          contents: [contents[0]]
        },
        {
          ...slides[1],
          contents: [contents[1]]
        }
      ],
      onClickClose: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<PlayerContainer {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({
      activeProjectID: "project-1",
      slides,
      contents
    });

    const wrapper = shallow(<Connected store={store} />);

    return {
      wrapper,
      store
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders as connected", () => {
    const { wrapper } = setupConnected();

    expect(wrapper).toMatchSnapshot();
  });

  it("should map new to props", () => {
    const { wrapper } = setupConnected();

    expect(wrapper.props()).toMatchObject({
      slides: expect.any(Array),
      onClickClose: expect.any(Function)
    });
  });

  it("should calls 'onClickClose' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickClose();

    expect(store.getActions()).toEqual([
      {
        type: "UPDATE_PROJECT",
        payload: {
          projectID: "project-1",
          newData: { isPlayed: false }
        }
      }
    ]);
  });

  it("should calls 'onClickRight' callback", () => {
    const { wrapper } = setup();

    wrapper.props().onClickRight();

    expect(wrapper.state().index).toEqual(1);
  });

  it("should calls 'onClickRight' callback but index not changed", () => {
    const { wrapper } = setup();

    wrapper.setState({ index: 1 });
    wrapper.props().onClickRight();

    expect(wrapper.state().index).toEqual(1);
  });

  it("should calls 'onClickLeft' callback", () => {
    const { wrapper } = setup();

    wrapper.setState({ index: 1 });
    wrapper.props().onClickLeft();

    expect(wrapper.state().index).toEqual(0);
  });

  it("should calls 'onClickLeft' callback but index not changed", () => {
    const { wrapper } = setup();

    wrapper.props().onClickLeft();

    expect(wrapper.state().index).toEqual(0);
  });
});
