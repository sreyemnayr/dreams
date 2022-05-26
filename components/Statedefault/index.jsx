import React from "react";
import styled from "styled-components";
import { Border1pxLtblue100, BarlowBoldAthensGray14px } from "../../styledMixins";


function Statedefault(props) {
  const { className } = props;

  return (
    <ButtonPrimary className={`button-primary ${className || ""}`}>
      <Label className="label">WHAT THE F#&amp;% IS A MERGE?</Label>
    </ButtonPrimary>
  );
}

const ButtonPrimary = styled.div`
  ${Border1pxLtblue100}
  width: 269px;
  height: 44px;
  margin-top: 27px;
  margin-left: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--firefly-2);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.button-primary.button-primary-1 {
    position: absolute;
    top: 660px;
    left: 696px;
    margin-top: unset;
    margin-left: unset;
  }

  &.button-primary.button-primary-2 {
    position: absolute;
    top: 1003px;
    left: 282px;
    margin-top: unset;
    margin-left: unset;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

const Label = styled.p`
  ${BarlowBoldAthensGray14px}
  height: 18px;
  width: 205px;
  text-align: center;
  letter-spacing: 0.7px;
  line-height: 18px;
  white-space: nowrap;
`;

export default Statedefault;
