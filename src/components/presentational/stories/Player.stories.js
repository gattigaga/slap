import React from "react";
import { storiesOf, action } from "@storybook/react";

import Player from "../Player";

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

storiesOf("Player", module).add("default", () => (
  <Player
    active={0}
    slides={items}
    onClickLeft={action("left clicked")}
    onClickRight={action("right clicked")}
    onClickClose={action("close clicked")}
  />
));
