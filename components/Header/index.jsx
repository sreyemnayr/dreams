import React from "react";
import styled from "styled-components";
import { BarlowExtraBoldWhite61px, ValignTextMiddle } from "../../styledMixins";


function Header(props) {
  const { children, className } = props;

  return (
    <Header1 className={`header ${className || ""}`}>
      <CoreTeam className="core-team">{children}</CoreTeam>
    </Header1>
  );
}

const Header1 = styled.div`
  flex: 1;
  max-height: 361px;
  display: flex;
  justify-content: center;

  &.header.header-2 {
    height: 361px;
    width: 834px;
    align-self: center;
    flex: unset;
    max-height: unset;
  }
`;

const CoreTeam = styled.div`
  ${ValignTextMiddle}
  ${BarlowExtraBoldWhite61px}
            margin-top: 192px;
  width: 834px;
  height: 73px;
  text-align: center;
  letter-spacing: -0.61px;
`;

export default Header;
