import React from "react";
import Group1 from "../Group1";
import Iconno from "../Iconno";
import styled from "styled-components";
import { Border1pxStroke } from "../../styledMixins";


function Biono3(props) {
  const { img, className, group1Props, iconnoProps } = props;

  return (
    <TeamMemberDef className={`team-member-def ${className || ""}`}>
      <Upper className="upper-2">
        <Img className="img-2" src={img} />
        <Group1 name={group1Props.name} title={group1Props.title} className={group1Props.className} />
      </Upper>
      <Iconno statedefault2Props={iconnoProps.statedefault2Props} />
    </TeamMemberDef>
  );
}

const TeamMemberDef = styled.div`
  ${Border1pxStroke}
  margin-top: 8px;
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

  &.team-member-def.team-member-def-1 {
    margin-top: unset;
  }

  &.team-member-def.team-member-def-2 {
    margin-top: unset;
  }
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
  margin-left: 0.5px;
  height: 1px;
  width: 1px;
  margin-top: 59.8px;
`;

const Img1 = styled.img`
  .team-member-def.team-member-def-1 & {
    height: 120px;
    width: 120px;
    margin-left: unset;
    margin-top: unset;
  }
`;

export default Biono3;
