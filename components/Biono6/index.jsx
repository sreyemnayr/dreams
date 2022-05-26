import React from "react";
import Upper42 from "../Upper42";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  Border1pxStroke,
  BarlowsemicondensedSemiBoldAthensGr1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
} from "../../styledMixins";


function Biono6(props) {
  const { spanText1, spanText2, spanText3, upper42Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper42 group12Props={upper42Props.group12Props} />
      <Byline>
        <Span03>{spanText1}</Span03>
        <Span13>{spanText2}</Span13>
        <Span23>{spanText3}</Span23>
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

const Span03 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr1}
  letter-spacing: 0.05px;
`;

const Span13 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span23 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono6;
