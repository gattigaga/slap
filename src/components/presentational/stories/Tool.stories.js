import React from "react";
import { storiesOf, action } from "@storybook/react";
import { MdAddCircle } from "react-icons/md";
import styled from "styled-components";

import Tool from "../Tool";

const Container = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
`;

const Icon = styled(MdAddCircle)`
  font-size: 24px;
  color: #555;
`;

storiesOf("Tool", module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add("default", () => <Tool icon={<Icon />} onClick={action("clicked")} />)
  .add("is active", () => (
    <Tool icon={<Icon />} onClick={action("clicked")} isActive />
  ));
