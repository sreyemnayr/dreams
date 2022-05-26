import React from "react";
import styled from "styled-components";


function GNavIcons(props) {
  const { className } = props;

  return (
    <GNavIcons1 className={`g-nav-icons ${className || ""}`}>
      <Twitter className="twitter" src="/img/twitter@2x.png" />
      <Discord className="discord" src="/img/discord@2x.png" />
      <Opensea className="opensea" src="/img/opensea@2x.png" />
      <Hamburger className="hamburger" src="/img/hamburger-1@2x.png" />
    </GNavIcons1>
  );
}

const GNavIcons1 = styled.div`
  align-self: center;
  margin-left: 118px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  min-width: 135px;

  &.g-nav-icons.g-nav-icons-1 {
    margin-left: 488px;
    margin-top: 1px;
    align-self: unset;
    margin-bottom: unset;
  }
`;

const Twitter = styled.img`
  width: 18px;
  height: 15px;
  margin-bottom: 0.94px;
  object-fit: cover;
`;

const Discord = styled.img`
  width: 21px;
  height: 16px;
  margin-left: 18px;
  margin-bottom: 0.25px;
  object-fit: cover;
`;

const Opensea = styled.img`
  width: 19px;
  height: 18px;
  margin-left: 18px;
  object-fit: cover;
`;

const Hamburger = styled.img`
  width: 23px;
  height: 14px;
  margin-left: 18px;
`;

export default GNavIcons;
