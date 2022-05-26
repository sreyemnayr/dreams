import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedBoldAthensGray16, ValignTextMiddle } from "../../styledMixins";


function Logo(props) {
  const { className } = props;

  return (
    <Logo1 className={`logo ${className || ""}`}>
      <Head1 className="head-1" src="/img/head-1@2x.png" />
      <Dreams className="dreams">DR.EAMS</Dreams>
    </Logo1>
  );
}

const Logo1 = styled.div`
  width: 145px;
  height: 52px;
  display: flex;
  align-items: flex-end;

  &.logo.logo-1 {
    align-self: flex-end;
  }
`;

const Head1 = styled.img`
  margin-bottom: 3px;
  width: 53px;
  height: 47px;
  margin-left: 14px;
  object-fit: cover;
`;

const Dreams = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedBoldAthensGray16}
            margin-bottom: 16px;
  width: 67px;
  height: 16px;
  margin-left: 5px;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

export default Logo;
