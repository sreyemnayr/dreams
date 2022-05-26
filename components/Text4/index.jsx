import React from "react";
import styled from "styled-components";
import { BarlowNormalAthensGray16px, BarlowsemicondensedBoldAthensGray16, ValignTextMiddle } from "../../styledMixins";


function Text4() {
  return (
    <Text>
      <EstablishRisingArt>
        The gamification of merging our song/collection begins, our project is validated.
      </EstablishRisingArt>
      <EponymRaffleForMinters>FIRST 1000 MINTERS RECEIVE FREE DR.EAMS OG MINT T-SHIRT</EponymRaffleForMinters>
    </Text>
  );
}

const Text = styled.div`
  width: 1152px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 81px;
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

const EponymRaffleForMinters = styled.p`
  ${BarlowsemicondensedBoldAthensGray16}
  min-height: 19px;
  margin-top: 36px;
  min-width: 436px;
  text-align: center;
  letter-spacing: 0.75px;
`;

export default Text4;
