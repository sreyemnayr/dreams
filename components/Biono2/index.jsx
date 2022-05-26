import React from "react";
import Group1 from "../Group1";
import Iconyes from "../Iconyes";
import styled from "styled-components";
import { Border1pxStroke } from "../../styledMixins";


function Biono2(props) {
  const { img, className, group1Props, iconyesProps } = props;

  return (
    <TeamMemberIns className={`team-member-ins-3 ${className || ""}`}>
      <Upper className="upper-1">
        <Img className="img-1" src={img} />
        <Group1 name={group1Props.name} title={group1Props.title} className={group1Props.className} />
      </Upper>
      <Iconyes
        icon={iconyesProps.icon}
        className={iconyesProps.className}
        statedefault2Props={iconyesProps.statedefault2Props}
      />
    </TeamMemberIns>
  );
}

const TeamMemberIns = styled.div`
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

  &.team-member-ins-3.team-member-ins-5 {
    margin-top: unset;
  }

  &.team-member-ins-3.team-member-tw-7 {
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
  height: 120px;
  width: 60.5px;
  object-fit: cover;
`;

const Img1 = styled.img`
  .team-member-ins-3.team-member-tw-5 & {
    margin-left: 0.5px;
    height: 1px;
    width: 1px;
    margin-top: 59.8px;
  }
`;

const Img2 = styled.img`
  .team-member-ins-3.team-member-ins-4 & {
    margin-left: 0.5px;
    height: 1px;
    width: 1px;
    margin-top: 59.8px;
  }
`;

const Img3 = styled.img`
  .team-member-ins-3.team-member-tw-6 & {
    margin-left: 0.5px;
    height: 1px;
    width: 1px;
    margin-top: 59.8px;
  }
`;

const Img4 = styled.img`
  .team-member-ins-3.team-member-ins-5 & {
    margin-left: 0.5px;
    height: 1px;
    width: 1px;
    margin-top: 59.8px;
  }
`;

const Img5 = styled.img`
  .team-member-ins-3.team-member-tw-7 & {
    margin-left: 0.5px;
    height: 1px;
    width: 1px;
    margin-top: 59.8px;
  }
`;

export default Biono2;
