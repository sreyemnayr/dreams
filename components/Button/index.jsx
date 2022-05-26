import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedBoldAthensGray14, Border1pxTuna, ValignTextMiddle } from "../../styledMixins";


function Button(props) {
  const { children, className } = props;

  return (
    <Button1 className={`button-31 ${className || ""}`}>
      <Text className="text-2">{children}</Text>
    </Button1>
  );
}

const Button1 = styled.div`
  ${Border1pxTuna}
  height: 45px;
  margin-left: 24px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  min-width: 131px;
  background-color: var(--dkblue--100);
  border-radius: 6px;

  &.button-31.button-33 {
    margin-left: unset;
  }

  &.button-31.button-34 {
    margin-left: unset;
  }

  &.button-31.button-35 {
    margin-left: unset;
  }

  &.button-31.button-36 {
    margin-left: unset;
  }

  &.button-31.button-37 {
    margin-left: unset;
  }

  &.button-31.button-38 {
    margin-left: unset;
  }

  &.button-31.button-39 {
    margin-left: unset;
  }

  &.button-31.button-40 {
    margin-left: unset;
  }

  &.button-31.button-41 {
    margin-left: unset;
  }

  &.button-31.button-42 {
    margin-left: unset;
  }

  &.button-31.button-43 {
    margin-left: unset;
  }
`;

const Text = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedBoldAthensGray14}
            height: 17px;
  min-width: 71px;
  text-align: center;
  letter-spacing: 0.75px;
`;

export default Button;
