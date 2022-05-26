import React, {useState} from "react";
import ReadMoreButton from "../Statedefault2";
import styled from "styled-components";


function SocialIcon(props) {
  const { icon, className, statedefault2Props, onClick } = props;
  

  return (
    <BottomBar className={`bottom-bar ${className || ""}`}>
      { icon !== 'img/.svg' &&
        <Icon className="icon" src={icon} onClick={()=>{ console.log(readMore); setReadMore(!readMore);}} />
      }
      <ReadMoreButton className={statedefault2Props.className} onClick={onClick} />
      
    </BottomBar>
  );
}



const BottomBar = styled.div`
  height: 56px;
  width: 189px;
  align-self: center;
  position: relative;
  margin-bottom: 12px;
  display: flex;
`;

const Icon = styled.img`
  margin-top: 13px;
  width: 30px;
  height: 30px;
`;

const Icon1 = styled.img`
  .bottom-bar.bottom-bar-2 & {
    margin-top: 27.8px;
    width: 1px;
    height: 1px;
    margin-left: 14.8px;
  }
`;

const Icon2 = styled.img`
  .bottom-bar.bottom-bar-3 & {
    margin-top: 27.8px;
    width: 1px;
    height: 1px;
    margin-left: 14.8px;
  }
`;

const Icon3 = styled.img`
  .bottom-bar.bottom-bar-4 & {
    margin-top: 27.8px;
    width: 1px;
    height: 1px;
    margin-left: 14.8px;
  }
`;

const Icon4 = styled.img`
  .bottom-bar.bottom-bar-5 & {
    margin-top: 27.8px;
    width: 1px;
    height: 1px;
    margin-left: 14.8px;
  }
`;

const Icon5 = styled.img`
  .bottom-bar.bottom-bar-6 & {
    margin-top: 27.8px;
    width: 1px;
    height: 1px;
    margin-left: 14.8px;
  }
`;

export default SocialIcon;
