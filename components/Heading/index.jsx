import React from "react";
import styled from "styled-components";
import { BarlowBoldWhite391px, ValignTextMiddle } from "../../styledMixins";


function Heading(props) {
  const { children, className } = props;

  return (
    <Heading1 className={`heading ${className || ""}`}>
      <HeadingText className="heading-text">{children}</HeadingText>
    </Heading1>
  );
}

const Heading1 = styled.div`
  width: 414px;
  height: 226px;
  display: flex;
  justify-content: center;

  &.heading.heading-1 {
    align-self: center;
  }

  &.heading.heading-2 {
    flex: 1;
    max-height: 226px;
    width: unset;
    height: unset;
  }

  &.heading.heading-3 {
    flex: 1;
    max-height: 226px;
    width: unset;
    height: unset;
  }

  &.heading.heading-4 {
    align-self: center;
  }
`;

const HeadingText = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldWhite391px}
            margin-top: 112px;
  width: 366px;
  height: 50px;
  text-align: center;
  letter-spacing: -0.78px;
  line-height: 50px;
  white-space: nowrap;
`;

export default Heading;
