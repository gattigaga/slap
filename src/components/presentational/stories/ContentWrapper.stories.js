import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";

const Container = styled.svg`
  width: 480px;
  height: 320px;
  border: 1px solid #ccc;
`;

storiesOf("ContentWrapper", module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add("default", () => (
    <ContentWrapper width={320} height={96} x={32} y={32} />
  ));
