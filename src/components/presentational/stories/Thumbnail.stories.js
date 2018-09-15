import React from "react";
import { storiesOf, action } from "@storybook/react";

import Thumbnail from "../Thumbnail";

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

storiesOf("Thumbnail", module).add("default", () => (
  <Thumbnail width={240} contents={contents} onClick={action("clicked")} />
));
