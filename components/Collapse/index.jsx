import React from "react";
import styled from "styled-components";
import { BarlowsemicondensedSemiBoldAthensGr, ValignTextMiddle } from "../../styledMixins";


function Collapse() {
  return (
    <Button>
      <Label>COLLAPSE</Label>
    </Button>
  );
}

const Button = styled.div`
  margin-top: 7.5px;
  height: 41px;
  margin-left: 31.5px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 112px;
  background-color: #142130;
  border-radius: 6px;
  box-shadow: 0px 1px 5px #00000033, 0px 3px 1px #0000001f, 0px 2px 2px #00000024;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedSemiBoldAthensGr}
            height: 17px;
  min-width: 64px;
  text-align: center;
  letter-spacing: 0.75px;
`;

export default Collapse;
