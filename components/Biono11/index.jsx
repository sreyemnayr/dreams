import React from "react";
import Upper3 from "../Upper3";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  Border1pxStroke,
  BarlowsemicondensedSemiBoldAthensGr1,
} from "../../styledMixins";


function Biono11(props) {
  const { upper3Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper3 img={upper3Props.img} group12Props={upper3Props.group12Props} />
      <Byline>
        <Span08>fun fact</Span08>
        <Span18>&nbsp;&nbsp; </Span18>
        <Span28>“Seemingly unlimited baritone” according to Opera News</Span28>
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
  ${BarlowsemicondensedSemiBoldAthensGr1}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const Span08 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr1}
  letter-spacing: 0.05px;
`;

const Span18 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span28 = styled.span`
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
  ${BarlowsemicondensedSemiBoldAthensGr1}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const Span0 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr1}
  letter-spacing: 0.05px;
`;

const Span1 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span2 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono11;
