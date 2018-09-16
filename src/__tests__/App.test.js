import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import Connected, { App } from "../App";

jest.mock("../components/container/Home", () => "Home");
jest.mock("../components/container/Editor", () => "Editor");

describe("App", () => {
  const mockStore = configureMockStore();

  const setup = propOverrides => {
    const props = {
      ...propOverrides
    };

    const wrapper = shallow(<App {...props} />);

    return {
      wrapper,
      props
    };
  };

  const setupConnected = storeOverrides => {
    const store = mockStore({
      activeProjectID: null,
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

  it("should renders with active project", () => {
    const { wrapper } = setup({
      activeProjectID: "project-1"
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should map new to props", () => {
    const { wrapper } = setupConnected();

    expect(wrapper.props()).toMatchObject({
      activeProjectID: null
    });
  });
});
