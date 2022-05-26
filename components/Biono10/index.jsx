import React from "react";
import Upper2 from "../Upper2";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke,
} from "../../styledMixins";


function Biono10(props) {
  const { upper2Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper2 img={upper2Props.img} group1Props={upper2Props.group1Props} />
      <Byline>
        <Span07>worked with </Span07>
        <Span17>&nbsp;</Span17>
        <Span27>&nbsp;</Span27>
        <Span32>Taylor Swift, Bon Iver, Eyedea &amp; Abilities</Span32>
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

const Span07 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span17 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span27 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span32 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

const TeamMusician1 = styled.div`
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

const Byline1 = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const Span0 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span1 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span2 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span3 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono10;
