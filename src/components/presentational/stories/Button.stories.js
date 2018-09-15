import React from "react";
import { storiesOf, action } from "@storybook/react";
import { MdAddCircle } from "react-icons/md";
import styled from "styled-components";

import Button from "../Button";

const Icon = styled(MdAddCircle)`
  font-size: 18px;
  color: white;
  margin-right: 8px;
`;

storiesOf("Button", module)
  .add("default", () => (
    <Button caption="My Button" onClick={action("clicked")} />
  ))
  .add("with icon", () => (
    <Button icon={<Icon />} caption="My Button" onClick={action("clicked")} />
  ));
