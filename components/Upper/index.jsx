import React from "react";
import Group1 from "../Group1";
import styled from "styled-components";


function Upper(props) {
  const { img, name, title, byline="", bylineCategory="" } = props;

  return (
    <Upper1>
      <Img src={img} />
      <Group1 name={name} title={title} byline={byline} bylineCategory={bylineCategory} />
    </Upper1>
  );
}

const Upper1 = styled.div`
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
  width: 120px;
  object-fit: cover;
  border-radius:50%;
`;

const Upper2 = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 197px;
  position: relative;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img1 = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
`;

const Upper3 = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 197px;
  position: relative;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img2 = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
`;

export default Upper;
