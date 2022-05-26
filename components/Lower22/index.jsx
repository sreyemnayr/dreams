import React from "react";
import Button from "../Button";
import styled from "styled-components";


function Lower22(props) {
  const { icons, className, buttonProps } = props;

  return (
    <Lower className={`lower ${className || ""}`}>
      <Icons className="icons-1" src={icons} />
      <Button>{buttonProps.children}</Button>
    </Lower>
  );
}

const Lower = styled.div`
  height: 61px;
  position: relative;
  margin-top: 16px;
  display: flex;
  align-items: center;
  min-width: 215px;

  &.lower.lower-1 {
    align-self: center;
    margin-bottom: 24px;
    margin-top: unset;
  }

  &.lower.lower-2 {
    align-self: center;
    margin-bottom: 24px;
    margin-top: unset;
  }
`;

const Icons = styled.img`
  width: 60px;
  height: 21px;
  margin-top: 0;
`;

const Icons1 = styled.img`
  .lower.lower-1 & {
    height: 20px;
  }
`;

const Icons2 = styled.img`
  .lower.lower-2 & {
    height: 20px;
  }
`;

export default Lower22;
