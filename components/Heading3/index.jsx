import React from "react";
import styled from "styled-components";
import { BarlowExtraBoldWhite61px, ValignTextMiddle } from "../../styledMixins";


function Heading3(props) {
  const { children, className } = props;

  return (
    <Heading className={`heading-5 ${className || ""}`}>
      <HeadingText className="heading-text-1">{children}</HeadingText>
    </Heading>
  );
}

const Heading = styled.div`
  width: 1512px;
  height: 329px;
  display: flex;
  justify-content: center;

  &.heading-5.heading-6 {
    align-self: center;
  }

  &.heading-5.heading-7 {
    flex: 1;
    max-height: 329px;
    width: unset;
    height: unset;
  }

  &.heading-5.heading-8 {
    flex: 1;
    max-height: 329px;
    width: unset;
    height: unset;
  }

  &.heading-5.heading-9 {
    align-self: center;
  }
`;

const HeadingText = styled.div`
  ${ValignTextMiddle}
  font-family: 'Barlow Semi Condensed', sans-serif;
  weight: 600;
            margin-top: 176px;
  width: 1336px;
  height: 73px;
  text-align: center;
  letter-spacing: -0.61px;
  color: var(--white);
  font-size: 61px;
  font-style: normal;
  text-transform: uppercase;
`;

export default Heading3;
