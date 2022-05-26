import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { BarlowsemicondensedExtraExtraBoldAt, ValignTextMiddle } from "../../styledMixins";


function RoadmapLg42() {
  return (
    <RoadmapLg>
      <RoadmapText>
        <SELLOUT>25% SELLOUT</SELLOUT>
        <Text2 />
      </RoadmapText>
    </RoadmapLg>
  );
}

const RoadmapLg = styled.div`
  margin-left: 13px;
  width: 1200px;
  height: 268px;
  margin-top: 12px;
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
  min-height: 268px;
`;

const SELLOUT = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedExtraExtraBoldAt}
            width: 1152px;
  height: 72px;
  text-align: center;
  letter-spacing: 0;
`;

export default RoadmapLg42;
