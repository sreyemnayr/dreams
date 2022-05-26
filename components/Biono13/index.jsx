import React from "react";
import Group12 from "../Group12";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke,
} from "../../styledMixins";


function Biono13(props) {
  const { img, line, spanText1, spanText2, spanText3, spanText4, group12Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper>
        <Img src={img} />
        <Group12 name={group12Props.name} title={group12Props.title} className={group12Props.className} />
        <Line src={line} />
      </Upper>
      <Byline>
        <Span010>{spanText1}</Span010>
        <Span110>{spanText2}</Span110>
        <Span210>{spanText3}</Span210>
        <Span34>{spanText4}</Span34>
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

const Upper = styled.div`
  width: 197px;
  height: 204px;
  position: relative;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 120px;
  width: 106.5px;
  align-self: center;
`;

const Line = styled.img`
  margin-left: 26px;
  width: 145px;
  height: 1px;
  margin-top: 16px;
`;

const Byline = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const Span010 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span110 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span210 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span34 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono13;
