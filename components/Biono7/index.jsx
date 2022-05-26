import React from "react";
import Upper42 from "../Upper42";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke,
} from "../../styledMixins";


function Biono7(props) {
  const { spanText1, spanText4, className, upper42Props, iconnoProps } = props;

  return (
    <TeamMusician className={`team-musician-5 ${className || ""}`}>
      <Upper42 group12Props={upper42Props.group12Props} />
      <Byline className="byline-3">
        <Span04 className="span0-4">{spanText1}</Span04>
        <Span14 className="span1-4">&nbsp;</Span14>
        <Span24 className="span2-4">&nbsp;</Span24>
        <Span31 className="span3-1">{spanText4}</Span31>
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

  &.team-musician-5.team-musician-7 {
    min-height: 376px;
  }

  &.team-musician-5.team-musician-8 {
    min-height: 376px;
  }

  &.team-musician-5.team-musician-9 {
    min-height: 376px;
  }
`;

const Byline = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const Span04 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span14 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span24 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span31 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

const Byline1 = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}

  .team-musician-5.team-musician-7  & {
    min-height: 16px;
    white-space: nowrap;
  }
`;

const Byline2 = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}

  .team-musician-5.team-musician-8  & {
    min-height: 16px;
    white-space: nowrap;
  }
`;

const Byline3 = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}

  .team-musician-5.team-musician-9  & {
    min-height: 16px;
    white-space: nowrap;
  }
`;

export default Biono7;
