import React from "react";
import Text4 from "../Text4";
import styled from "styled-components";
import { BarlowsemicondensedExtraExtraBoldAt, ValignTextMiddle } from "../../styledMixins";


function RoadmapLg32() {
  return (
    <RoadmapLg>
      <RoadmapText>
        <SELLOUT>10% SELLOUT</SELLOUT>
        <Text4 />
      </RoadmapText>
    </RoadmapLg>
  );
}

const RoadmapLg = styled.div`
  margin-left: 13px;
  width: 1200px;
  height: 269px;
  display: flex;
  justify-content: center;
  background-color: var(--bunker);
  mix-blend-mode: multiply;
`;

const RoadmapText = styled.div`
  width: 1152px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: flex-start;
  min-height: 269px;
`;

const SELLOUT = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedExtraExtraBoldAt}
            width: 1152px;
  height: 72px;
  text-align: center;
  letter-spacing: 0;
`;

export default RoadmapLg32;
