import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedSemiBoldWhite14p, BarlowsemicondensedBoldWhite24px } from "../../styledMixins";


function Upper32(props) {
  const { className } = props;

  return (
    <Static className={`static ${className || ""}`}>
      <Img className="img-9"></Img>
      <Name className="name-2">First Lastname</Name>
      <Title className="title-4">TITLE</Title>
    </Static>
  );
}

const Static = styled.div`
  width: 197px;
  height: 199px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.static.upper-9 {
    min-height: 199px;
    height: unset;
  }
`;

const Img = styled.div`
  height: 120px;
  width: 120px;
  background-color: var(--mist-gray);
  border-radius: 60px;
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

const Name1 = styled.div`
  ${BarlowsemicondensedBoldWhite24px}

  .static.upper-9  & {
    min-height: 29px;
    height: unset;
  }
`;

const Title1 = styled.div`
  ${BarlowsemicondensedSemiBoldWhite14p}

  .static.upper-9  & {
    min-height: 18px;
    height: unset;
  }
`;

export default Upper32;
