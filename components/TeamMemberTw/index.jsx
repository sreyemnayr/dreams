import React from "react";
import Upper32 from "../Upper32";
import Icon from "../Icon";
import styled from "styled-components";
import { Mobilebody1 } from "../../styledMixins";
import "./TeamMemberTw.css";

function TeamMemberTw(props) {
  const { bio } = props;

  return (
    <div className="container-center-horizontal">
      <div className="teammembertw border-1px-medgray--100 screen">
        <Upper32 />
        <Bio>{bio}</Bio>
        <Icon />
      </div>
    </div>
  );
}

const Bio = styled.p`
  ${Mobilebody1}
  width: 197px;
  min-height: 168px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--white);
  line-height: 21px;
`;

export default TeamMemberTw;
