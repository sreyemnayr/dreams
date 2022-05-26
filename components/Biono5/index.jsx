import React from "react";
import Group1 from "../Group1";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke,
} from "../../styledMixins";


function Biono5(props) {
  const { img, line, spanText1, spanText2, spanText3, spanText4, group1Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper>
        <Img src={img} />
        <Group1 name={group1Props.name} title={group1Props.title} className={group1Props.className} />
        <Line src={line} />
      </Upper>
      <Byline>
        <Span02>{spanText1}</Span02>
        <Span12>{spanText2}</Span12>
        <Span22>{spanText3}</Span22>
        <Span3>{spanText4}</Span3>
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
  width: 60.5px;
  align-self: center;
`;

const Line = styled.img`
  margin-left: 49px;
  width: 99px;
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

const Span02 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span12 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span22 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span3 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono5;
