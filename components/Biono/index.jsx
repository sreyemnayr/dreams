import React, {useState} from "react";
import Upper from "../Upper";
import SocialIcon from "../Iconyes";
import styled from "styled-components";
import { Border1pxStroke } from "../../styledMixins";


function Bio(props) {
  const { className, img, name, title, bio, twitter='', instagram='', byline='', bylineCategory='' } = props;
  const [readMore,setReadMore]=useState(false);

  return (
    <TeamMemberTw className={`team-member-tw ${className || ""} ${readMore ? 'bio' : 'no-bio'}`}>
      <Upper img={img} name={name} title={title} byline={byline} bylineCategory={bylineCategory} />
      <SocialIcon icon={`img/${twitter !== '' ? 'twitter' : instagram !== '' ? 'instagram' : ''}.svg`} statedefault2Props="" onClick={()=>{ console.log(readMore); setReadMore(!readMore);}}  />
      {readMore && 
        <TeamMemberBio>
          {bio}
        </TeamMemberBio>
      }
    </TeamMemberTw>
  );
}

const TeamMemberBio = styled.div`
  margin: 10px;
  position: relative;
  color: white;
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Barlow', sans-serif;
  font-weight: 100;
`


const TeamMemberTw = styled.div`
  ${Border1pxStroke}
  margin-top: 8px;
  width: 245px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;

  &.no-bio {
    height: 329px;
  }

  &.bio {
    height:auto;
  }

  &.team-member-tw.team-member-tw-1 {
    margin-left: 38px;
    margin-top: unset;
  }

  &.team-member-tw.team-member-ins {
    margin-left: 16px;
    margin-top: unset;
  }

  &.team-member-tw.team-member-tw-2 {
    margin-left: 16px;
    margin-top: unset;
  }

  &.team-member-tw.team-member-ins-1 {
    margin-left: 16px;
    margin-top: unset;
  }

  &.team-member-tw.team-member-tw-3 {
    margin-left: 38px;
    margin-top: unset;
  }

  &.team-member-tw.team-member-ins-2 {
    margin-left: 16px;
    margin-top: unset;
  }

  &.team-member-tw.team-member-tw-4 {
    margin-left: 16px;
    margin-top: unset;
  }
`;



export default Bio;
