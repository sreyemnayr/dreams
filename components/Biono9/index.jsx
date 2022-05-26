import React from "react";
import Group1 from "../Group1";
import Iconyes from "../Iconyes";
import styled from "styled-components";
import { Border1pxStroke } from "../../styledMixins";


function Biono9(props) {
  const { img, group1Props, iconyesProps } = props;

  return (
    <TeamMemberTw>
      <Upper>
        <Img src={img} />
        <Group1 name={group1Props.name} title={group1Props.title} />
      </Upper>
      <Iconyes icon={iconyesProps.icon} statedefault2Props={iconyesProps.statedefault2Props} />
    </TeamMemberTw>
  );
}

const TeamMemberTw = styled.div`
  ${Border1pxStroke}
  width: 245px;
  height: 329px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Upper = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 197px;
  position: relative;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 120px;
  width: 106.5px;
  object-fit: cover;
`;

export default Biono9;
