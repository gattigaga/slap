import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { SlideListContainer } from "../SlideListContainer";

jest.mock("../../presentational/SlideList", () => "SlideList");

describe("SlideListContainer", () => {
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
    const items = slides.map(slide => {
      const slideContents = contents.filter(content => content.id === slide.id);

      return {
        ...slide,
        contents: slideContents
      };
    });

    const props = {
      items,
      active: "slide-1",
      onClick: jest.fn(),
      onClickDelete: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<SlideListContainer {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({
      slides,
      contents,
      activeProjectID: "project-1",
      activeSlideID: "slide-1"
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
      items: expect.any(Array),
      active: "slide-1",
      onClick: expect.any(Function),
      onClickDelete: expect.any(Function)
    });
  });

  it("should calls 'onClick' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClick(slides[0]);

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_SLIDE_ID",
        payload: slides[0].id
      }
    ]);
  });

  it("should calls 'onClickDelete' props in non-active slide", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickDelete(slides[1]);

    expect(store.getActions()).toEqual([
      {
        type: "REMOVE_SLIDE",
        payload: slides[1].id
      },
      {
        type: "REMOVE_CONTENT",
        payload: contents[1].id
      }
    ]);
  });

  it("should calls 'onClickDelete' props in active slide", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickDelete(slides[0]);

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_SLIDE_ID",
        payload: slides[1].id
      },
      {
        type: "REMOVE_SLIDE",
        payload: slides[0].id
      },
      {
        type: "REMOVE_CONTENT",
        payload: contents[0].id
      }
    ]);
  });
});
