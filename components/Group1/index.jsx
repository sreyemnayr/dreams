import React from "react";
import styled from "styled-components";
import { BarlowBoldAthensGray20px, BarlowBoldAthensGray12px,   BarlowsemicondensedMediumAthensGray1,
  BarlowMediumAthensGray12px,
  BarlowsemicondensedMediumAthensGray,
  BarlowsemicondensedSemiBoldAthensGr,
  Border1pxStroke, } from "../../styledMixins";


function Group1(props) {
  const { name, title, className, byline="", bylineCategory="" } = props;

  return (
    <Group11 className={`group-1 ${className || ""}`}>
      <Name className="name">{name}</Name>
      <Title className="title">{title}</Title>
      { byline !== "" &&
        <Byline>
          <BylineCat>{bylineCategory}</BylineCat>
          <BylineInfo>{byline}</BylineInfo>
        </Byline>
      }
    </Group11>
  );
}

const Group11 = styled.div`
  margin-left: 4px;
  height: 61px;
  width: 201px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.group-1.group-1-2 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-3 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-4 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-5 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-6 {
    height: 51px;
    align-self: center;
  }

  &.group-1.group-1-7 {
    height: 51px;
    align-self: center;
  }

  &.group-1.group-1-8 {
    height: 51px;
    align-self: center;
  }

  &.group-1.group-1-9 {
    height: 51px;
    align-self: center;
  }

  &.group-1.group-1-10 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-11 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-12 {
    margin-top: 75.2px;
  }

  &.group-1.group-1-13 {
    height: 51px;
    align-self: center;
  }

  &.group-1.group-1-14 {
    height: 51px;
    align-self: center;
  }
`;

const Name = styled.div`
  ${BarlowBoldAthensGray20px}
  margin-left: -4px;
  height: 29px;
  width: 197px;
  text-align: center;
  letter-spacing: -0.2px;
`;

const Title = styled.div`
  ${BarlowBoldAthensGray12px}
  margin-left: -4px;
  height: 24px;
  width: 197px;
  margin-top: 8px;
  text-align: center;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

const Title1 = styled.div`
  ${BarlowBoldAthensGray12px}

  .group-1.group-1-6  & {
    height: 14px;
  }
`;

const Title2 = styled.div`
  ${BarlowBoldAthensGray12px}

  .group-1.group-1-7  & {
    height: 14px;
  }
`;

const Title3 = styled.div`
  ${BarlowBoldAthensGray12px}

  .group-1.group-1-8  & {
    height: 14px;
  }
`;

const Title4 = styled.div`
  ${BarlowBoldAthensGray12px}

  .group-1.group-1-9  & {
    height: 14px;
  }
`;

const Title5 = styled.div`
  ${BarlowBoldAthensGray12px}

  .group-1.group-1-13  & {
    height: 14px;
  }
`;

const Title6 = styled.div`
  ${BarlowBoldAthensGray12px}

  .group-1.group-1-14  & {
    height: 14px;
  }
`;


const Byline = styled.p`
  ${BarlowsemicondensedSemiBoldAthensGr}
  width: 196px;
  min-height: 33px;
  margin-top: 16px;
  line-height: 16px;
`;

const BylineCat = styled.span`
  ${BarlowsemicondensedSemiBoldAthensGr}
  letter-spacing: 0.04px;
  text-transform: uppercase;
  margin-right: 1em;
  line-height: 1.5em;
`;

const BylineInfo = styled.span`
  ${BarlowMediumAthensGray12px}
  letter-spacing: 0.01px;
`;

export default Group1;
