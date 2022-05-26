import React from "react";
import Upper3 from "../Upper3";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke,
} from "../../styledMixins";


function Biono12(props) {
  const { spanText1, spanText4, upper3Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper3 img={upper3Props.img} group12Props={upper3Props.group12Props} />
      <Byline>
        <Span09>{spanText1}</Span09>
        <Span19>&nbsp;</Span19>
        <Span29>&nbsp;</Span29>
        <Span33>{spanText4}</Span33>
      </Byline>
      <Iconno className={iconnoProps.className} statedefault2Props={iconnoProps.statedefault2Props} />
    </TeamMusician>
  );
}

const TeamMusician = styled.div`
  ${Border1pxStroke}
  margin-top: 8px;
  width: 245px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  align-items: center;
  min-height: 393px;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Byline = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const Span09 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span19 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span29 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span33 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono12;
