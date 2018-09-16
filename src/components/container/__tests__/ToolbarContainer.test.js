import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { ToolbarContainer } from "../ToolbarContainer";

jest.mock("../../presentational/Toolbar", () => "Toolbar");

describe("ToolbarContainer", () => {
  const mockStore = configureMockStore();

  const setup = propOverrides => {
    const props = {
      activeContext: "arrow",
      onClickAddSlide: jest.fn(),
      onClickCursor: jest.fn(),
      onClickTextbox: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<ToolbarContainer {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({
      activeContext: "arrow",
      activeProjectID: "project-1"
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
      activeContext: expect.any(String),
      onClickAddSlide: expect.any(Function),
      onClickCursor: expect.any(Function),
      onClickTextbox: expect.any(Function)
    });
  });

  it("should calls 'onClickAddSlide' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickAddSlide();

    expect(store.getActions()).toEqual([
      {
        type: "ADD_SLIDE",
        payload: expect.any(Object)
      },
      {
        type: "SET_ACTIVE_SLIDE_ID",
        payload: expect.any(String)
      }
    ]);
  });

  it("should calls 'onClickCursor' props ", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickCursor();

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_CONTEXT",
        payload: "arrow"
      },
      {
        type: "SET_ACTIVE_CONTENT_ID",
        payload: null
      },
      {
        type: "SET_IS_CONTENT_EDITABLE",
        payload: false
      }
    ]);
  });

  it("should calls 'onClickTextbox' props ", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickTextbox();

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_CONTEXT",
        payload: "textbox"
      },
      {
        type: "SET_ACTIVE_CONTENT_ID",
        payload: null
      },
      {
        type: "SET_IS_CONTENT_EDITABLE",
        payload: false
      }
    ]);
  });
});
