import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { Editor } from "../Editor";

jest.mock("../HeaderContainer", () => "HeaderContainer");
jest.mock("../SlideListContainer", () => "SlideListContainer");
jest.mock("../ToolbarContainer", () => "ToolbarContainer");
jest.mock("../MainSlideContainer", () => "MainSlideContainer");
jest.mock("../PlayerContainer", () => "PlayerContainer");

describe("Editor", () => {
  Date.now = jest.fn(() => 1537028524421);

  const mockStore = configureMockStore();

  const projects = [
    {
      id: "project-1",
      name: "Presentation 1st",
      timestamp: Date.now()
    },
    {
      id: "project-2",
      name: "Presentation 2nd",
      timestamp: Date.now()
    }
  ];

  const setup = propOverrides => {
    const props = {
      name: "My Project",
      deleteContent: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Editor {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({
      projects,
      activeProjectID: "project-1",
      activeContentID: "content-1"
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

  it("should renders with player", () => {
    const { wrapper } = setup({ isPlayed: true });

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders as connected", () => {
    const { wrapper } = setupConnected();

    expect(wrapper).toMatchSnapshot();
  });

  it("should map new to props", () => {
    const { wrapper } = setupConnected();

    expect(wrapper.props()).toMatchObject({
      name: "Presentation 1st",
      deleteContent: expect.any(Function)
    });
  });

  it("should calls 'deleteContent' props", () => {
    const { wrapper, store } = setupConnected();
    const event = { key: "Delete" };

    wrapper.props().deleteContent(event);

    expect(store.getActions()).toEqual([
      {
        type: "REMOVE_CONTENT",
        payload: "content-1"
      }
    ]);
  });

  it("should not calls 'deleteContent' props", () => {
    const { wrapper, store } = setupConnected();
    const event = { key: "Enter" };

    wrapper.props().deleteContent(event);

    expect(store.getActions()).toEqual([]);
  });
});
