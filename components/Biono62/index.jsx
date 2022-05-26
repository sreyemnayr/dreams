import React from "react";
import Lower3 from "../Lower3";
import styled from "styled-components";
import {
  BarlowMediumAthensGray12px,
  Border1pxMedgray100,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedBoldAthensGray24,
  BarlowsemicondensedSemiBoldAthensGr1,
  BarlowsemicondensedSemiBoldWhite14p,
} from "../../styledMixins";


function Biono62(props) {
  const { img, line, lower3Props } = props;

  return (
    <TeamMusician>
      <Upper>
        <Img src={img} />
        <Name>dr. ape</Name>
        <Title>BARITONE OPERA SINGER</Title>
        <Line src={line} />
        <Byline>
          <Span013>fun fact</Span013>
          <Span113>&nbsp;&nbsp; </Span113>
          <Span213>“Seemingly unlimited baritone” according to Opera News</Span213>
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
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--firefly);
  box-shadow: 0px 1px 8px #00000040;
  mix-blend-mode: color-burn;
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

const Byline = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr1}
  height: 33px;
  width: 196px;
  align-self: center;
  margin-top: 16px;
  line-height: 16px;
`;

const Span013 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr1}
  letter-spacing: 0.05px;
`;

const Span113 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span213 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Biono62;
