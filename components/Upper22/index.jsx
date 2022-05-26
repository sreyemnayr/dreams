import React from "react";
import styled from "styled-components";
import {
  BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  BarlowsemicondensedBoldAthensGray24,
  BarlowsemicondensedSemiBoldWhite14p,
} from "../../styledMixins";


function Upper22(props) {
  const { img, name, title, spanText1, spanText4, className } = props;

  return (
    <Upper className={`upper-14 ${className || ""}`}>
      <Img className="img-14" src={img} />
      <Name className="name-7">{name}</Name>
      <Title className="title-10">{title}</Title>
      <Line className="line-7" src="/img/line@2x.png" />
      <Byline className="byline-11">
        <Span014 className="span0-14">{spanText1}</Span014>
        <Span114 className="span1-14">&nbsp;</Span114>
        <Span214 className="span2-14">&nbsp;</Span214>
        <Span36 className="span3-6">{spanText4}</Span36>
      </Byline>
    </Upper>
  );
}

const Upper = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 265px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;

  &.upper-14.upper-16 {
    height: 248px;
  }
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
  ${BarlowsemicondensedSemiBoldAthensGr}
  height: 33px;
  width: 196px;
  align-self: center;
  margin-top: 16px;
  line-height: 16px;
`;

const Span014 = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
`;

const Span114 = styled.span`
  ${BarlowsemicondensedMediumAthensGray1}
  letter-spacing: 0.03px;
`;

const Span214 = styled.span`
  ${BarlowsemicondensedMediumAthensGray}
  letter-spacing: 0.05px;
`;

const Span36 = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

const Byline1 = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}

  .upper-14.upper-16  & {
    height: 16px;
    white-space: nowrap;
  }
`;

export default Upper22;
