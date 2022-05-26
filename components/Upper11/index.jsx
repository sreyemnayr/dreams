import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedSemiBoldWhite14p, BarlowsemicondensedBoldWhite24px } from "../../styledMixins";


function Upper11(props) {
  const { img, name, title } = props;

  return (
    <Upper>
      <Img src={img} />
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Upper>
  );
}

const Upper = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 199px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 120px;
  width: 120px;
`;

const Name = styled.div`
  ${BarlowsemicondensedBoldWhite24px}
  height: 29px;
  width: 197px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.25px;
`;

const Title = styled.div`
  ${BarlowsemicondensedSemiBoldWhite14p}
  height: 18px;
  width: 197px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 18px;
  white-space: nowrap;
`;

export default Upper11;
