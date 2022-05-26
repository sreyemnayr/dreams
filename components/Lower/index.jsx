import React from "react";
import Button from "../Button";
import styled from "styled-components";


function Lower(props) {
  const { icons, buttonProps } = props;

  return (
    <Lower1>
      <Icons src={icons} />
      <Button>{buttonProps.children}</Button>
    </Lower1>
  );
}

const Lower1 = styled.div`
  height: 61px;
  align-self: center;
  position: relative;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  min-width: 215px;
`;

const Icons = styled.img`
  width: 60px;
  height: 17px;
  margin-bottom: 0;
`;

export default Lower;
