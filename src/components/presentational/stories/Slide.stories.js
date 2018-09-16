import React from "react";
import { storiesOf, action } from "@storybook/react";

import Slide from "../Slide";

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
    content: "Stay hungry",
    position: {
      x: 128,
      y: 96
    }
  }
];

storiesOf("Slide", module)
  .add("default", () => (
    <Slide
      index={1}
      contents={contents}
      onClick={action("clicked")}
      onClickDelete={action("delete clicked")}
    />
  ))
  .add("is active", () => (
    <Slide
      index={12}
      contents={contents}
      onClick={action("clicked")}
      onClickDelete={action("delete clicked")}
      isActive
    />
  ));
