import React from "react";
import Lower3 from "../Lower3";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  Border1pxMedgray100,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  BarlowsemicondensedBoldAthensGray24,
  BarlowsemicondensedSemiBoldWhite14p,
} from "../../styledMixins";


function Biono82(props) {
  const { img, name, title, line, className, lower3Props } = props;

  return (
    <TeamMusician className={`team-musician-21 ${className || ""}`}>
      <Upper className="upper-17">
        <Img className="img-15" src={img} />
        <Name className="name-8">{name}</Name>
        <Title className="title-11">{title}</Title>
        <Line className="line-8" src={line} />
        <Byline className="byline-12">
          <Span015 className="span0-15">worked with</Span015>
          <Span115 className="span1-15">&nbsp;</Span115>
          <Span215 className="span2-15"> .......</Span215>
        </Byline>
      </Upper>
      <Lower3 buttonProps={lower3Props.buttonProps} />
    </TeamMusician>
  );
}

const TeamMusician = styled.div`
  ${Border1pxMedgray100}
  width: 245px;
  height: 385px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--firefly);
  box-shadow: 0px 1px 8px #00000040;
  mix-blend-mode: color-burn;

  &.team-musician-21.team-musician-22 {
    height: 403px;
  }
`;

const Upper = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 248px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 120px;
  width: 120px;
  align-self: center;
  object-fit: cover;
`;

const Name = styled.div`
  ${BarlowsemicondensedBoldAthensGray24}
  height: 29px;
  align-self: center;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.25px;
`;

const Title = styled.div`
  ${BarlowsemicondensedSemiBoldWhite14p}
  height: 18px;
  align-self: center;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 18px;
  white-space: nowrap;
`;

const Line = styled.img`
  width: 197px;
  height: 1px;
  margin-top: 16px;
`;

const Byline = styled.div`
  ${BarlowsemicondensedSemiBoldAthensGr}
  height: 16px;
  width: 196px;
  align-self: center;
  margin-top: 16px;
  line-height: 16px;
  white-space: nowrap;
`;

const Span015 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span115 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span215 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Upper1 = styled.div`
  .team-musician-21.team-musician-22 & {
    height: 266px;
  }
`;

const Title1 = styled.div`
  ${BarlowsemicondensedSemiBoldWhite14p}

  .team-musician-21.team-musician-22  & {
    height: 36px;
    white-space: unset;
  }
`;

export default Biono82;
