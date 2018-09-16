import React from "react";
import { storiesOf, action } from "@storybook/react";

import Header from "../Header";

storiesOf("Header", module).add("default", () => (
  <Header
    name="My Project"
    onChangeName={action("changed")}
    onClickClose={action("close clicked")}
    onClickPlay={action("play clicked")}
  />
));
