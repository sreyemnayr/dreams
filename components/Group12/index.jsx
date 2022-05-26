import React from "react";
import styled from "styled-components";
import { BarlowBoldWhite12px, BarlowBoldAthensGray20px } from "../../styledMixins";


function Group12(props) {
  const { name, title, className } = props;

  return (
    <Group1 className={`group-1-15 ${className || ""}`}>
      <Name className="name-1">{name}</Name>
      <Title className="title-1">{title}</Title>
    </Group1>
  );
}

const Group1 = styled.div`
  margin-left: 4px;
  height: 51px;
  width: 201px;
  align-self: center;
  margin-top: 75.2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.group-1-15.group-1-17 {
    margin-top: 16px;
  }

  &.group-1-15.group-1-18 {
    margin-top: 16px;
  }

  &.group-1-15.group-1-19 {
    margin-top: 16px;
  }

  &.group-1-15.group-1-20 {
    margin-top: 16px;
  }

  &.group-1-15.group-1-21 {
    margin-top: 16px;
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
  ${BarlowBoldWhite12px}
  margin-left: -4px;
  height: 14px;
  width: 197px;
  margin-top: 8px;
  text-align: center;
  letter-spacing: 0.6px;
`;

export default Group12;
