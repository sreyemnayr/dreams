import React from "react";
import Lower3 from "../Lower3";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  Border1pxMedgray100,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  BarlowsemicondensedBoldAthensGray24,
} from "../../styledMixins";


function Biono52(props) {
  const { img, name, title, line, spanText4, className, lower3Props } = props;

  return (
    <TeamMusician className={`team-musician-15 ${className || ""}`}>
      <Upper className="upper-12">
        <Img className="img-12" src={img} />
        <Name className="name-5">{name}</Name>
        <Title className="title-8">{title}</Title>
        <Line className="line-5" src={line} />
        <Byline className="byline-9">
          <Span012 className="span0-12">worked with </Span012>
          <Span112 className="span1-12">&nbsp;</Span112>
          <Span212 className="span2-12">&nbsp;</Span212>
          <Span35 className="span3-5">{spanText4}</Span35>
        </Byline>
      </Upper>
      <Lower3 buttonProps={lower3Props.buttonProps} />
    </TeamMusician>
  );
}

const TeamMusician = styled.div`
  ${Border1pxMedgray100}
  width: 245px;
  height: 402px;
  position: relative;
  margin-left: 38px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--firefly);
  box-shadow: 0px 1px 8px #00000040;
  mix-blend-mode: color-burn;

  &.team-musician-15.team-musician-16 {
    margin-left: 16px;
  }
`;

const Upper = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 265px;
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
  ${BarlowsemicondensedSemiBoldAthensGr}
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

const Byline = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}
  height: 33px;
  width: 196px;
  align-self: center;
  margin-top: 16px;
  line-height: 16px;
`;

const Span012 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span112 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span212 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span35 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono52;
