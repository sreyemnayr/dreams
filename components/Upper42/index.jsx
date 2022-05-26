import React from "react";
import Group12 from "../Group12";
import styled from "styled-components";


function Upper42(props) {
  const { group12Props } = props;

  return (
    <Upper>
      <Img src="/img/img-27@2x.png" />
      <Group12 name={group12Props.name} title={group12Props.title} />
      <Line src="/img/img-27@2x.png" />
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
  margin-left: 0.5px;
  height: 1px;
  width: 1px;
  align-self: center;
  margin-top: 59.8px;
`;

const Line = styled.img`
  margin-left: 98.2px;
  width: 1px;
  height: 1px;
  margin-top: 16.2px;
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
  margin-left: 0.5px;
  height: 1px;
  width: 1px;
  align-self: center;
  margin-top: 59.8px;
`;

const Line1 = styled.img`
  margin-left: 98.2px;
  width: 1px;
  height: 1px;
  margin-top: 16.2px;
`;

const Upper2 = styled.div`
  width: 197px;
  height: 204px;
  position: relative;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const Img2 = styled.img`
  margin-left: 0.5px;
  height: 1px;
  width: 1px;
  align-self: center;
  margin-top: 59.8px;
`;

const Line2 = styled.img`
  margin-left: 98.2px;
  width: 1px;
  height: 1px;
  margin-top: 16.2px;
`;

export default Upper42;
