import React from "react";
import Group1 from "../Group1";
import styled from "styled-components";


function Upper2(props) {
  const { img, group1Props } = props;

  return (
    <Upper>
      <Img src={img} />
      <Group1 name={group1Props.name} title={group1Props.title} className={group1Props.className} />
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

const Upper3 = styled.div`
  width: 197px;
  height: 204px;
  position: relative;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const Img2 = styled.img`
  height: 120px;
  width: 120px;
  align-self: center;
`;

const Line2 = styled.img`
  width: 197px;
  height: 1px;
  margin-top: 16px;
`;

export default Upper2;
