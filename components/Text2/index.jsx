import React from "react";
import styled from "styled-components";
import { BarlowNormalAthensGray16px, BarlowsemicondensedSemiBoldAthensGr, ValignTextMiddle } from "../../styledMixins";


function Text2() {
  return (
    <Text>
      <EstablishRisingArt>
        Non-Profit Record Label established for musician projects in need of $$ support.
      </EstablishRisingArt>
      <EponymRaffleForMinters>EPONYM RAFFLE FOR MINTERS</EponymRaffleForMinters>
    </Text>
  );
}

const Text = styled.div`
  width: 1152px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
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
  ${BarlowsemicondensedSemiBoldAthensGr}
  min-height: 18px;
  margin-top: 36px;
  min-width: 194px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 18px;
  white-space: nowrap;
`;

export default Text2;
