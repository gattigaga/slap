import React from "react";
import { storiesOf, action } from "@storybook/react";

import MainSlide from "../MainSlide";

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

storiesOf("MainSlide", module)
  .add("default", () => (
    <MainSlide
      contents={contents}
      onClick={action("clicked")}
      onChangeContent={action("content changed")}
      onClickContent={action("content clicked")}
      onDoubleClickContent={action("content double clicked")}
      onMouseMove={action("mouse moved")}
    />
  ))
  .add("with active content", () => (
    <MainSlide
      contents={contents}
      active="content-2"
      onClick={action("clicked")}
      onChangeContent={action("content changed")}
      onClickContent={action("content clicked")}
      onDoubleClickContent={action("content double clicked")}
      onMouseMove={action("mouse moved")}
    />
  ))
  .add("with editable content", () => (
    <MainSlide
      contents={contents}
      active="content-2"
      onClick={action("clicked")}
      onChangeContent={action("content changed")}
      onClickContent={action("content clicked")}
      onDoubleClickContent={action("content double clicked")}
      onMouseMove={action("mouse moved")}
      isContentEditable
    />
  ));
