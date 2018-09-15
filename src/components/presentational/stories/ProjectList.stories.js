import React from "react";
import { storiesOf, action } from "@storybook/react";

import ProjectList from "../ProjectList";

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

const items = [...Array(10)].map((_, index) => ({
  id: `project-${index + 1}`,
  name: `Project ${index + 1}`,
  timestamp: 1537004755445,
  contents
}));

storiesOf("ProjectList", module)
  .add("default", () => (
    <ProjectList
      items={items}
      onClick={action("clicked")}
      onClickDelete={action("delete clicked")}
    />
  ))
  .add("without items", () => <ProjectList />);
