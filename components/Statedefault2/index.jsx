import React from "react";
import styled from "styled-components";
import { BarlowBoldAthensGray14px, ValignTextMiddle } from "../../styledMixins";


function ReadMoreButton(props) {
  const { className, onClick } = props;

  return (
    <ButtonSecondary className={`button-secondary ${className || ""}`} onClick={onClick}>
      <Label className="label-1">READ MORE</Label>
    </ButtonSecondary>
  );
}

const ButtonSecondary = styled.div`
  margin-top: 6px;
  width: 143px;
  height: 44px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-2);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 8px #14212f80;
  mix-blend-mode: overlay;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.button-secondary.button-secondary-2 {
    margin-left: 30.2px;
  }

  &.button-secondary.button-secondary-3 {
    margin-left: 30.2px;
  }

  &.button-secondary.button {
    margin-left: 17px;
  }

  &.button-secondary.button-secondary-4 {
    margin-left: 30.2px;
  }

  &.button-secondary.labelreadmore {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-1 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-2 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-3 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-4 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-5 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-6 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-7 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-8 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-9 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-10 {
    margin-left: 17px;
  }

  &.button-secondary.labelreadmore-1 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-11 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-12 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-13 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-14 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-15 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-16 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-17 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-18 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-19 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-secondary-5 {
    margin-left: 30.2px;
  }

  &.button-secondary.button-20 {
    margin-left: 17px;
  }

  &.button-secondary.button-secondary-6 {
    margin-left: 30.2px;
  }

  &.button-secondary.labelreadmore-2 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-21 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-22 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-23 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-24 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-25 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-26 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-27 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-28 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &.button-secondary.button-29 {
    margin-top: 10px;
    margin-left: 17px;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldAthensGray14px}
            height: 18px;
  width: 79px;
  text-align: center;
  letter-spacing: 0.7px;
  line-height: 18px;
  white-space: nowrap;
`;

export default ReadMoreButton;
