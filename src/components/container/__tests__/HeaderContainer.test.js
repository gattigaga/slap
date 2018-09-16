import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { HeaderContainer } from "../HeaderContainer";

jest.mock("../../presentational/Header", () => "Header");

describe("HeaderContainer", () => {
  const mockStore = configureMockStore();

  const setup = propOverrides => {
    const props = {
      name: "My Project",
      onClickPlay: jest.fn(),
      onClickClose: jest.fn(),
      onChangeName: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<HeaderContainer {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({
      projects: [
        {
          id: "project-1",
          name: "My Project"
        }
      ],
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
      name: "My Project",
      onClickPlay: expect.any(Function),
      onClickClose: expect.any(Function),
      onChangeName: expect.any(Function)
    });
  });

  it("should calls 'onClickPlay' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickPlay("project-1");

    expect(store.getActions()).toEqual([
      {
        type: "UPDATE_PROJECT",
        payload: {
          projectID: "project-1",
          newData: { isPlayed: true }
        }
      }
    ]);
  });

  it("should calls 'onClickClose' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().onClickClose("project-1");

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
        type: "SET_ACTIVE_CONTENT_ID",
        payload: null
      },
      {
        type: "UPDATE_PROJECT",
        payload: {
          projectID: "project-1",
          newData: { isPlayed: false }
        }
      }
    ]);
  });

  it("should calls 'onChangeName' props", () => {
    const { wrapper, store } = setupConnected();
    const event = {
      target: {
        value: "My Project Updated"
      }
    };

    wrapper.props().onChangeName(event);

    expect(store.getActions()).toEqual([
      {
        type: "UPDATE_PROJECT",
        payload: {
          projectID: "project-1",
          newData: { name: event.target.value }
        }
      }
    ]);
  });
});
