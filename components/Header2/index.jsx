import React from "react";
import Header3 from "../Header3";
import styled from "styled-components";


function Header2(props) {
  const { className, header3Props } = props;

  return (
    <H1Roadmap className={`h1-roadmap-1 ${className || ""}`}>
      <Header3>{header3Props.children}</Header3>
    </H1Roadmap>
  );
}

const H1Roadmap = styled.div`
  height: 403px;
  width: 1200px;
  align-self: center;
  position: relative;
  display: flex;
  justify-content: center;

  &.h1-roadmap-1.header-3 {
    flex: 1;
    max-height: 403px;
    height: unset;
    width: unset;
    align-self: unset;
  }

  &.h1-roadmap-1.header-4 {
    flex: 1;
    max-height: 403px;
    height: unset;
    width: unset;
    align-self: unset;
  }
`;

export default Header2;
