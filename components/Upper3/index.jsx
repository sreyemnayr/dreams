import React from "react";
import Group12 from "../Group12";
import styled from "styled-components";


function Upper3(props) {
  const { img, group12Props } = props;

  return (
    <Upper>
      <Img src={img} />
      <Group12 name={group12Props.name} title={group12Props.title} className={group12Props.className} />
      <Line src="/img/line@2x.png" />
    </Upper>
  );
}

const Upper = styled.div`
  width: 197px;
  height: 204px;
  position: relative;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 120px;
  width: 120px;
  align-self: center;
`;

const Line = styled.img`
  width: 197px;
  height: 1px;
  margin-top: 16px;
`;

const Upper1 = styled.div`
  width: 197px;
  height: 204px;
  position: relative;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const Img1 = styled.img`
  height: 120px;
  width: 120px;
  align-self: center;
`;

const Line1 = styled.img`
  width: 197px;
  height: 1px;
  margin-top: 16px;
`;

export default Upper3;
