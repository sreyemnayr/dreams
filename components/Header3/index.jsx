import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedExtraExtraBoldWh, ValignTextMiddle } from "../../styledMixins";


function Header3(props) {
  const { children } = props;

  return <Title>{children}</Title>;
}

const Title = styled.h1`
  ${ValignTextMiddle}
  ${BarlowsemicondensedExtraExtraBoldWh}
            margin-top: 192px;
  width: 1440px;
  height: 115px;
  text-align: center;
  letter-spacing: -1.5px;
`;

export default Header3;
