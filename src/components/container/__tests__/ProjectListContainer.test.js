import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { ProjectListContainer } from "../ProjectListContainer";

describe("ProjectListContainer", () => {
  jest.mock("../../presentational/ProjectList", () => "ProjectList");

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

  const slides = [
    {
      id: "slide-1",
      projectID: "project-1"
    },
    {
      id: "slide-2",
      projectID: "project-2"
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
      projectID: "project-2",
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

    const wrapper = shallow(<ProjectListContainer {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({
      projects,
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
      items: expect.any(Array),
      onClick: expect.any(Function),
      onClickDelete: expect.any(Function)
    });
  });

  it("should calls 'onClick' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClick(projects[0]);

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_PROJECT_ID",
        payload: projects[0].id
      },
      {
        type: "SET_ACTIVE_SLIDE_ID",
        payload: slides[0].id
      }
    ]);
  });

  it("should calls 'onClickDelete' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickDelete(projects[0]);

    expect(store.getActions()).toEqual([
      {
        type: "SET_ACTIVE_PROJECT_ID",
        payload: null
      },
      {
        type: "SET_ACTIVE_SLIDE_ID",
        payload: null
      },
      {
        type: "REMOVE_PROJECT",
        payload: projects[0].id
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
