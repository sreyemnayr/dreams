import React from "react";
import Upper42 from "../Upper42";
import Iconno from "../Iconno";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke,
} from "../../styledMixins";


function Biono8(props) {
  const { upper42Props, iconnoProps } = props;

  return (
    <TeamMusician>
      <Upper42 group12Props={upper42Props.group12Props} />
      <Byline>
        <Span05>worked with</Span05>
        <Span15>&nbsp;</Span15>
        <Span25> .......</Span25>
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
  min-height: 376px;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Byline = styled.div`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 16px;
  margin-top: 16px;
  line-height: 16px;
  white-space: nowrap;
`;

const Span05 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span15 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span25 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
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
  min-height: 376px;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Byline1 = styled.div`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 16px;
  margin-top: 16px;
  line-height: 16px;
  white-space: nowrap;
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

const TeamMusician2 = styled.div`
  ${Border1pxStroke}
  margin-top: 8px;
  width: 245px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  align-items: center;
  min-height: 376px;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Byline2 = styled.div`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 16px;
  margin-top: 16px;
  line-height: 16px;
  white-space: nowrap;
`;

const Span01 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span11 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span21 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

export default Biono8;
