import React from "react";
import styled from "styled-components";
import {
  BarlowNormalAthensGray16px,
  BarlowsemicondensedExtraExtraBoldAt,
  BarlowsemicondensedBoldAthensGray16,
  ValignTextMiddle,
} from "../../styledMixins";


function RoadmapLg5(props) {
  const { sellout, establishRisingArt, eponymRaffleForMinters } = props;

  return (
    <RoadmapLg>
      <RoadmapText>
        <SELLOUT>{sellout}</SELLOUT>
        <Text>
          <EstablishRisingArt>{establishRisingArt}</EstablishRisingArt>
          <EponymRaffleForMinters>{eponymRaffleForMinters}</EponymRaffleForMinters>
        </Text>
      </RoadmapText>
    </RoadmapLg>
  );
}

const RoadmapLg = styled.div`
  margin-left: 13px;
  width: 1200px;
  height: 288px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  background-color: var(--bunker);
  mix-blend-mode: multiply;
`;

const RoadmapText = styled.div`
  width: 1152px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: flex-start;
  min-height: 288px;
`;

const SELLOUT = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedExtraExtraBoldAt}
            width: 1152px;
  height: 72px;
  text-align: center;
  letter-spacing: 0;
`;

const Text = styled.div`
  width: 1152px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
`;

const EstablishRisingArt = styled.p`
  ${ValignTextMiddle}
  ${BarlowNormalAthensGray16px}
            width: 1072px;
  height: 26px;
  text-align: center;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const EponymRaffleForMinters = styled.div`
  ${BarlowsemicondensedBoldAthensGray16}
  width: 1072px;
  min-height: 38px;
  margin-top: 36px;
  text-align: center;
  letter-spacing: 0.75px;
`;

export default RoadmapLg5;
