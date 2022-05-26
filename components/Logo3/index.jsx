import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedBoldAthensGray16, ValignTextMiddle } from "../../styledMixins";


function Logo3(props) {
  const { logoHead } = props;

  return (
    <Logo>
      <OverlapGroup>
        <LogoHead src={logoHead} />
        <Dreams>DR.EAMS</Dreams>
      </OverlapGroup>
    </Logo>
  );
}

const Logo = styled.div`
  margin-left: 45px;
  display: flex;
  align-items: flex-start;
  min-width: 145px;
`;

const OverlapGroup = styled.div`
  width: 139px;
  height: 48px;
  position: relative;
`;

const LogoHead = styled.img`
  position: absolute;
  width: 78px;
  height: 48px;
  top: 0;
  left: 0;
`;

const Dreams = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedBoldAthensGray16}
            position: absolute;
  height: 16px;
  top: 16px;
  left: 72px;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

export default Logo3;
