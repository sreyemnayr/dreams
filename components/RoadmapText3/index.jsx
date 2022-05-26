import React from "react";
import styled from "styled-components";
import {
  BarlowNormalAthensGray16px,
  BarlowsemicondensedExtraExtraBoldAt,
  BarlowsemicondensedBoldAthensGray16,
  ValignTextMiddle,
} from "../../styledMixins";


function RoadmapText3(props) {
  const { sellout, establishRisingArt, eponymRaffleForMinters } = props;

  return (
    <RoadmapText>
      <SELLOUT>{sellout}</SELLOUT>
      <Text>
        <EstablishRisingArt>{establishRisingArt}</EstablishRisingArt>
        <EponymRaffleForMinters>{eponymRaffleForMinters}</EponymRaffleForMinters>
      </Text>
    </RoadmapText>
  );
}

const RoadmapText = styled.div`
  width: 1152px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: flex-start;
  min-height: 311px;
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
  min-height: 123px;
`;

const EstablishRisingArt = styled.p`
  ${ValignTextMiddle}
  ${BarlowNormalAthensGray16px}
            width: 1072px;
  height: 68px;
  text-align: center;
  letter-spacing: 0;
  line-height: 26px;
`;

const EponymRaffleForMinters = styled.p`
  ${BarlowsemicondensedBoldAthensGray16}
  width: 1072px;
  min-height: 19px;
  margin-top: 36px;
  text-align: center;
  letter-spacing: 0.75px;
`;

export default RoadmapText3;
