import React from "react";
import styled from "styled-components";
import { BarlowExtraBoldWhite61px, ValignTextMiddle } from "../../styledMixins";


function WhatsAMerge(props) {
  const { children, className } = props;

  return (
    <WhatsAMerge1 className={`whats-a-merge ${className || ""}`}>
      <WhatIsAMerge className="what-is-a-merge">{children}</WhatIsAMerge>
    </WhatsAMerge1>
  );
}

const WhatsAMerge1 = styled.div`
  width: 834px;
  height: 403px;
  display: flex;
  justify-content: center;

  &.whats-a-merge.h1-roadmap {
    align-self: center;
  }
`;

const WhatIsAMerge = styled.div`
  ${ValignTextMiddle}
  ${BarlowExtraBoldWhite61px}
            margin-top: 213px;
  width: 834px;
  height: 73px;
  text-align: center;
  letter-spacing: -0.61px;
`;

export default WhatsAMerge;
