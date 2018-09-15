import React from "react";
import { storiesOf, action } from "@storybook/react";

import Project from "../Project";

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

storiesOf("Project", module).add("default", () => (
  <Project
    name="My First Hackathon"
    timestamp={1537004755445}
    contents={contents}
    onClick={action("clicked")}
    onClickDelete={action("delete clicked")}
  />
));
