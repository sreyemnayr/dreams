import React from "react";
import Collapse from "../Collapse";
import styled from "styled-components";


function Icon() {
  return (
    <BottomBar>
      <Icon1 src="/img/icon@2x.svg" />
      <Collapse />
    </BottomBar>
  );
}

const BottomBar = styled.div`
  width: 197px;
  height: 56px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

const Icon1 = styled.img`
  margin-top: 13px;
  width: 31px;
  height: 30px;
  margin-left: 11px;
`;

export default Icon;
