import React from "react";
import Upper2 from "../Upper2";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedSemiBoldAthensGr,
  BarlowMediumAthensGray128px,
  Border1pxStroke,
  BarlowBoldAthensGray12px,
} from "../../styledMixins";


function Biono4(props) {
  const { className, upper2Props, iconnoProps } = props;

  return (
    <TeamMusician className={`team-musician ${className || ""}`}>
      <Upper2 img={upper2Props.img} group1Props={upper2Props.group1Props} />
      <Byline className="byline">
        <Span01 className="span0-1">worked with</Span01>
        <Span11 className="span1-1">&nbsp;</Span11>
        <Span21 className="span2-1">&nbsp;&nbsp; Bon Iver, John Prine, Andrew Bird, Eyedea &amp; Abilities</Span21>
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
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  align-items: center;
  min-height: 407px;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;

  &.team-musician.team-musician-1 {
    margin-left: 38px;
  }

  &.team-musician.team-musician-2 {
    margin-left: 38px;
  }
`;

const Byline = styled.p`
  ${BarlowBoldAthensGray12px}
  width: 196px;
  min-height: 47px;
  margin-top: 16px;
  line-height: 12px;
`;

const Span01 = styled.span`
  ${BarlowBoldAthensGray12px}
  letter-spacing: 0.07px;
`;

const Span11 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
  line-height: 16px;
`;

const Span21 = styled.span`
  ${BarlowMediumAthensGray128px}
  letter-spacing: 0.02px;
`;

export default Biono4;
