import React from "react";
import { storiesOf, action } from "@storybook/react";
import styled from "styled-components";

import Textbox from "../Textbox";

const Container = styled.svg`
  width: 480px;
  height: 320px;
  border: 1px solid #ccc;
`;

storiesOf("Textbox", module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add("default", () => (
    <Textbox
      value="My Text"
      width={420}
      height={48}
      x={24}
      y={24}
      onChange={action("changed")}
      onClick={action("clicked")}
      onDoubleClick={action("double clicked")}
    />
  ))
  .add("is active", () => (
    <Textbox
      value="My Text"
      width={420}
      height={48}
      x={24}
      y={24}
      onChange={action("changed")}
      onClick={action("clicked")}
      onDoubleClick={action("double clicked")}
      isActive
    />
  ))
  .add("is editable", () => (
    <Textbox
      value="My Text"
      width={420}
      height={48}
      x={24}
      y={24}
      onChange={action("changed")}
      onClick={action("clicked")}
      onDoubleClick={action("double clicked")}
      isActive
      isEditable
    />
  ));
