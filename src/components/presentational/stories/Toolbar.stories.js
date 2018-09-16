import React from "react";
import { storiesOf, action } from "@storybook/react";
import { MdAddCircle, MdAddAlert } from "react-icons/md";
import styled from "styled-components";

import Toolbar from "../Toolbar";

const IconAdd = styled(MdAddCircle)`
  font-size: 20px;
  color: #555;
`;

const IconAlert = IconAdd.withComponent(MdAddAlert);

const items = [
  {
    icon: <IconAdd />,
    onClick: action("clicked")
  },
  {
    icon: <IconAlert />,
    onClick: action("clicked"),
    isActive: true
  }
];

storiesOf("Toolbar", module).add("default", () => <Toolbar items={items} />);
