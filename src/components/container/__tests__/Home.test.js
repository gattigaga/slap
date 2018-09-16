import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import "jest-styled-components";

import Connected, { Home } from "../Home";

describe("Home", () => {
  jest.mock("../ProjectListContainer", () => "ProjectListContainer");
  jest.mock("../../presentational/Button", () => "Button");

  const mockStore = configureMockStore();

  const setup = propOverrides => {
    const props = {
      createProject: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Home {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = () => {
    const store = mockStore({});
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
      createProject: expect.any(Function)
    });
  });

  it("should calls 'createProject' props", () => {
    const { wrapper, store } = setupConnected();

    wrapper.props().createProject();

    expect(store.getActions()).toEqual([
      {
        type: "ADD_PROJECT",
        payload: expect.any(Object)
      },
      {
        type: "ADD_SLIDE",
        payload: expect.any(Object)
      },
      {
        type: "ADD_CONTENT",
        payload: expect.any(Object)
      },
      {
        type: "SET_ACTIVE_PROJECT_ID",
        payload: expect.any(String)
      },
      {
        type: "SET_ACTIVE_SLIDE_ID",
        payload: expect.any(String)
      }
    ]);
  });
});
