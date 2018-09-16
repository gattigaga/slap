import React from "react";
import { storiesOf, action } from "@storybook/react";

import SlideList from "../SlideList";

const items = [
  {
    id: "slide-1",
    projectID: "project-1",
    contents: [
      {
        id: "content-1",
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
  },
  {
    id: "slide-2",
    projectID: "project-1",
    contents: [
      {
        id: "content-2",
        slideID: "slide-2",
        projectID: "project-1",
        type: "text",
        content: "Stay foolish",
        position: {
          x: 128,
          y: 128
        }
      }
    ]
  }
];

storiesOf("SlideList", module)
  .add("default", () => (
    <SlideList
      items={items}
      onClick={action("clicked")}
      onClickDelete={action("delete clicked")}
    />
  ))
  .add("is active", () => (
    <SlideList
      items={items}
      onClick={action("clicked")}
      onClickDelete={action("delete clicked")}
      active="slide-2"
    />
  ));
