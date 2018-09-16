import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { MainSlideContainer } from "../MainSlideContainer";

jest.mock("../../presentational/MainSlide", () => "MainSlide");

describe("MainSlideContainer", () => {
  const mockStore = configureMockStore();

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
      slideID: "slide-1",
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
      contents,
      active: "content-1",
      cursor: "auto",
      onClick: jest.fn(),
      onChangeContent: jest.fn(),
      onClickContent: jest.fn(),
      onDoubleClickContent: jest.fn(),
      onMouseMove: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<MainSlideContainer {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = storeOverrides => {
    const store = mockStore({
      contents,
      activeProjectID: "project-1",
      activeSlideID: "slide-1",
      activeContentID: "content-1",
      activeContext: "arrow",
      isContentEditable: false,
      ...storeOverrides
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
      contents: expect.any(Array),
      active: "content-1",
      cursor: "auto",
      onClick: expect.any(Function),
      onChangeContent: expect.any(Function),
      onClickContent: expect.any(Function),
      onDoubleClickContent: expect.any(Function),
      isContentEditable: false
    });
  });

  it("should calls 'onClick' callback while clicked", () => {
    const { wrapper, props } = setup();
    const event = { stopPropagation: () => {} };

    wrapper.props().onClick(event);

    expect(props.onClick).toBeCalled();
  });

  it("should calls 'onClickContent' props", () => {
    const { wrapper, store } = setupConnected();
    const event = { stopPropagation: () => {} };

    wrapper.props().onClickContent(event, contents[0]);

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_CONTENT_ID",
        payload: contents[0].id
      }
    ]);
  });

  it("should calls 'onDoubleClickContent' props", () => {
    const { wrapper, store } = setupConnected();
    const event = { stopPropagation: () => {} };

    wrapper.props().onDoubleClickContent(event, contents[0]);

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_CONTENT_ID",
        payload: contents[0].id
      },
      {
        type: "SET_IS_CONTENT_EDITABLE",
        payload: true
      }
    ]);
  });

  it("should calls 'onChangeContent' props", () => {
    const { wrapper, store } = setupConnected();
    const event = {
      target: {
        value: "Hello World"
      }
    };
    const data = { content: event.target.value };

    wrapper.props().onChangeContent(event, contents[0]);

    expect(store.getActions()).toEqual([
      {
        type: "UPDATE_CONTENT",
        payload: {
          contentID: contents[0].id,
          newData: data
        }
      }
    ]);
  });

  it("should calls 'onClick' props in context 'arrow'", () => {
    const { wrapper, store } = setupConnected();
    const event = {
      clientX: 32,
      clientY: 32
    };
    const ref = {
      current: {
        getScreenCTM: jest.fn(() => ({
          a: 1,
          d: 2,
          e: 3,
          f: 4
        }))
      }
    };

    wrapper.props().onClick(event, ref);

    expect(ref.current.getScreenCTM).toBeCalled();
    expect(store.getActions()).toEqual([
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

  it("should calls 'onClick' props in context 'textbox'", () => {
    const { wrapper, store } = setupConnected({
      activeContext: "textbox"
    });

    const event = {
      clientX: 32,
      clientY: 32
    };
    const ref = {
      current: {
        getScreenCTM: jest.fn(() => ({
          a: 1,
          d: 2,
          e: 3,
          f: 4
        }))
      }
    };

    wrapper.props().onClick(event, ref);

    expect(ref.current.getScreenCTM).toBeCalled();
    expect(store.getActions()).toEqual([
      {
        type: "ADD_CONTENT",
        payload: expect.any(Object)
      },
      {
        type: "SET_ACTIVE_CONTENT_ID",
        payload: expect.any(String)
      },
      {
        type: "SET_ACTIVE_CONTEXT",
        payload: "arrow"
      }
    ]);
  });
});
